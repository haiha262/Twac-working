<?php

namespace VisualComposer\Modules\Settings;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Access\CurrentUser;
use VisualComposer\Helpers\Nonce;
use VisualComposer\Helpers\Notice;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Url;

/**
 * Class NoticeController.
 */
class NoticeController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    public function __construct()
    {
        /** \VisualComposer\Modules\Settings\NoticeController::dismissNotice */
        $this->addFilter('vcv:ajax:notice:dismiss:adminNonce', 'dismissNotice');
        /** \VisualComposer\Modules\Settings\NoticeController::createNotice */
        $this->wpAddAction('admin_notices', 'createNotice');
        $this->addEvent('vcv:system:factory:reset', '\VisualComposer\Helpers\Notice::reset');
    }

    /**
     * @param \VisualComposer\Helpers\Access\CurrentUser $currentUserHelper
     * @param Notice $noticeHelper
     * @param Url $urlHelper
     */
    protected function createNotice(
        CurrentUser $currentUserHelper,
        Notice $noticeHelper,
        Nonce $nonceHelper,
        Url $urlHelper
    ) {
        $notices = $noticeHelper->all();
        if (!empty($notices)) {
            foreach ($notices as $notice) {
                if (!$currentUserHelper->wpAll('manage_options')->get()
                    || get_user_meta(
                        get_current_user_id(),
                        'vcv:' . $notice['name'] . ':notice:' . $notice['time']
                    )
                ) {
                    return;
                }

                $class = 'notice notice-' . $notice['type'];

                if ($notice['dismissible']) {
                    printf(
                        '<div class="%1$s"><p>%2$s</p><p><a href="%3$s">%4$s</a></p></div>',
                        esc_attr($class),
                        $notice['message'],
                        $urlHelper->adminAjax([
                            'vcv-action' => 'notice:dismiss:adminNonce',
                            'vcv-notice-name' => $notice['name'],
                            'vcv-nonce' => $nonceHelper->admin(),
                        ]),
                        __('Dismiss', 'vcwb')
                    );
                } else {
                    printf(
                        '<div class="%1$s"><p>%2$s</p><p></p></div>',
                        esc_attr($class),
                        $notice['message']
                    );
                }
            }
        }
    }

    /**
     * @param \VisualComposer\Helpers\Request $requestHelper
     * @param Notice $noticeHelper
     */
    protected function dismissNotice(Request $requestHelper, Notice $noticeHelper)
    {
        $name = $requestHelper->input('vcv-notice-name');
        $noticeHelper->dismissNotice($name);
        wp_redirect($_SERVER['HTTP_REFERER']);
        exit;
    }
}
