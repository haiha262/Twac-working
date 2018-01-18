<script src="jquery-3.2.1.min.js"></script>
<?php
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * Content search flight
 *
 * Created by ShineTheme
 *
 */

wp_enqueue_script( 'bootstrap-datepicker.js' ); 
wp_enqueue_script( 'bootstrap-datepicker-lang.js' );
wp_enqueue_script('st.travelpayouts');
wp_enqueue_script( 'flights.js');// hatran add
$fields = array(
    // hatran add
     array(
    
        'name' => 'Radio',
        'placeholder' => esc_html__('Radio', ST_TEXTDOMAIN),
        'layout_col' => '12',
        'layout2_col' => '12',
        'is_required' => 'on'
    ),
     //end hatran
    array(
        'title' => esc_html__('Origin', ST_TEXTDOMAIN),
        'name' => 'origin',
        'placeholder' => esc_html__('Origin', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'on'
    ),
    array(
        'title' => esc_html__('Destination', ST_TEXTDOMAIN),
        'name' => 'destination',
        'placeholder' => esc_html__('Destination', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'on'
    ),
    array(
        'title' => esc_html__('Depart', ST_TEXTDOMAIN),
        'name' => 'depart',
        'placeholder' => esc_html__('Depart date', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'on'
    ),
    array(
        'title' => esc_html__('Return', ST_TEXTDOMAIN),
        'name' => 'return',
        'placeholder' => esc_html__('Return date', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'off'
    ),
    // hatran add
    array(
        'title' => esc_html__('Adult', ST_TEXTDOMAIN),
        'name' => 'people',
        //'placeholder' => esc_html__('Return date', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'off'
    ),
    array(
        'title' => esc_html__('Child', ST_TEXTDOMAIN),
        'name' => 'people',
        //'placeholder' => esc_html__('Return date', ST_TEXTDOMAIN),
        'layout_col' => '3',
        'layout2_col' => '3',
        'is_required' => 'off'
    ),
    array(
        'title' => esc_html__('Infant', ST_TEXTDOMAIN),
        'name' => 'people',
        //'placeholder' => esc_html__('Return date', ST_TEXTDOMAIN),
        'layout_col' => '3',
        'layout2_col' => '3',
        'is_required' => 'off'
    ),
    array(
        'title' => esc_html__('Cabin Class', ST_TEXTDOMAIN),
        'name' => 'classselect',
        //'placeholder' => esc_html__('Return date', ST_TEXTDOMAIN),
        'layout_col' => '6',
        'layout2_col' => '6',
        'is_required' => 'off'
    )
    //hatran end
);

$st_direction = !empty($st_direction) ? $st_direction : "horizontal";

if (!isset($field_size)) $field_size = '';
?>
<h2 class='mb20'><?php echo esc_html($st_title_search) ?></h2>
<?php $link = st()->get_option('custom_flight_search_link', ''); ?>
<!-- <form role="search" method="get" class="search main-search ss-search-flights-link" autocomplete="off" action="" target="_blank"> -->
    <form id="explore-flights" role="search"  action="https://twac.sabreexplore.com.au:443/searchAir.do" method="post" name="flights">
    <div class="row">
        <?php
        if (!empty($fields)) {
            foreach ($fields as $key => $value) {
                $default = array(
                    'placeholder' => ''
                );
                $value = wp_parse_args($value, $default);
                $name = $value['name'];

                $size = '4';
                if ($st_style_search == "style_1") {
                    $size = $value['layout_col'];
                } else {
                    if (!empty($value['layout2_col'])) {
                        $size = $value['layout2_col'];
                    }
                }

                if ($st_direction == 'vertical') {
                    $size = '12';
                }
                $size_class = " col-md-" . $size . " col-lg-" . $size . " col-sm-12 col-xs-12 ";
                ?>
                <div class="<?php echo esc_attr($size_class); ?>">
                    <?php echo st()->load_template('flight/skyscanner/search/field-' . $name, false, array('data' => $value, 'field_size' => $field_size, 'placeholder' => $value['placeholder'], 'st_direction' => $st_direction, 'is_required' => $value['is_required'])) ?>
                </div>
                <?php
            }
        } ?>
    </div>
    <?php
    $country = st()->get_option('ss_market_country', 'US');
    $currency = st()->get_option('ss_currency', 'USD');
    $locale = st()->get_option('ss_locale', 'en-US');
    $api_key = st()->get_option('ss_api_key','prtl674938798674');
    $api_key = substr($api_key,0,16);
    ?>
    <input type="hidden" class="skyscanner-search-flights-data" data-api="<?php echo esc_attr($api_key)?>" data-locale="<?php echo esc_attr($locale)?>" data-currency="<?php echo esc_attr($currency)?>" data-country="<?php echo esc_attr($country); ?>">
    <input type="hidden" name="apiKey" value="<?php echo esc_attr($api_key); ?>">
    <button class="btn btn-primary btn-lg" type="submit"><?php echo esc_html__('Search For Flights', ST_TEXTDOMAIN); ?></button>
    <!-- //hatran add
    <span class="api_info"><i class="fa fa-info-circle"></i> -->
    <?php //echo esc_html__('Search flights API of ', ST_TEXTDOMAIN)?>
    <!--     <a href="https://skyscanner.net" target="_blank">Skyscanner</a>
    </span>
     -->
</form>
