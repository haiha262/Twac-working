
<?php
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * Content search cars
 *
 * Created by ShineTheme
 *
 */

wp_enqueue_script( 'carSearch.js');// hatran add
$cars=new STCars();
$fields=$cars->get_search_fields();  
if(!isset($field_size)) $field_size='';
$st_direction = !empty($st_direction)? $st_direction :  "horizontal";
?>

    <h2 class='mb20'><?php echo esc_html($st_title_search) ?></h2>
    <?php $id_page = st()->get_option('cars_search_result_page');
    if(!empty($id_page)){
        $link_action = get_the_permalink($id_page);
    }else{
        $link_action = home_url( '/' );
    }
    //hatran add link for car
    $use_theme_car = false;

    if(!$use_theme_car)
    {
        $link_action = "https://twac.sabreexplore.com.au/searchCar.do";
    ?>
    <div id="explore-cars">
    <form method="post" action="<?php echo esc_url($link_action) ?>" class="main-search">

    <?php if (empty($id_page)): ?>
    <input type="hidden" name="post_type" value="st_cars">
    <input type="hidden" name="s" value="">
    <?php endif ?>
        <?php echo TravelHelper::get_input_multilingual_wpml() ?>
    <div class="row">
        <div class=''>
            <?php
            if (!empty($fields)) {
                $is_row = 0;
                foreach ($fields as $key => $value) {
                    $default = array(
                        'placeholder' => ''
                    );
                    $value = wp_parse_args($value, $default);
                    $name = $value['title'];

                    if ($value['field_atrribute'] == 'google_map_location') {
                        $value['field_atrribute'] = 'location';
                    }
                    $size = '4';
                    $size = $value['layout_col_normal'];

                    if ($st_direction == 'vertical') {
                        $size = '12';
                    }
                    $size_class = " col-md-" . $size . " col-lg-" . $size . " col-sm-12 col-xs-12 ";
                    ?>
                    <div class="<?php echo esc_attr($size_class); ?>">
                        <?php echo st()->load_template('cars/elements/search/field-' . $value['field_atrribute'], false, array('data' => $value, 'field_size' => $field_size, 'st_direction' => $st_direction, 'location_name' => 'location_name', 'placeholder' => $value['placeholder'], 'st_direction' => $st_direction)) ?>
                    </div>
                    <?php
                    if ($is_row >= 12) {
                        echo "</div><div class=''>";
                        $is_row = 0;
                    }
                }
            }
            ?>
        </div>


        <div class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-lg form-group-icon-left">

                        <label for="field-st-vehicleClass">Car Type </label>
                        <select id="field-st-vehicleClass" name="searchCar.segments[0].vehicleClass" title="Select a car type">
                            <option value="A">Any</option>
                            <option value="E">Economy</option>
                            <option value="C">Compact</option>
                            <option value="I">Intermediate</option>
                            <option value="S">Standard</option>
                            <option value="L">Luxury</option>
                            <option value="F">Full Size</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-lg form-group-icon-left">

                        <label for="field-st-transmission"> Transmission</label>
                        <select id="field-st-transmission" name="searchCar.segments[0].transmission" title="Select the type of transmission (note this will be ignored if not available)">
                            <option value="A">Automatic</option>
                            <option value="M">Manual</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class=" col-md-12 col-lg-12 col-sm-12 col-xs-12 " style="display: none">

        <input class="day" id="searchCar.segments0.pickupDate.day" name="searchCar.segments[0].pickupDate.day"/>
        <input class="month" id="searchCar.segments0.pickupDate.month" name="searchCar.segments[0].pickupDate.month"/>
        <input class="year" id="searchCar.segments0.pickupDate.year" name="searchCar.segments[0].pickupDate.year"/>

        <input id="searchCar.segments0.pickupTime" name="searchCar.segments[0].pickupTime" value="09:00" />

        <input class="day" id="searchCar.segments0.dropoffDate.day" name="searchCar.segments[0].dropoffDate.day"/>
        <input class="month" id="searchCar.segments0.dropoffDate.month" name="searchCar.segments[0].dropoffDate.month"/>
        <input class="year" id="searchCar.segments0.dropoffDate.year" name="searchCar.segments[0].dropoffDate.year"/>

        <input   id="searchCar.segments0.dropoffTime" name="searchCar.segments[0].dropoffTime" value="09:00" />

        <input   id="searchCar.segments0.dropoffCity" name="searchCar.segments[0].dropoffCity" class="explore-data-copy" idref="searchCar.segments0.pickupCity"/>

        <input name="wait" value="TRUE" type="hidden">
</div>
        <button class="btn btn-primary btn-lg" type="submit"><?php st_the_language('search_for_cars') ?></button>
    </form>
    </div>
<?php
}
else {
?>
    <form method="get" action="<?php echo esc_url($link_action) ?>" class="main-search">
        <?php if (empty($id_page)): ?>
            <input type="hidden" name="post_type" value="st_cars">
            <input type="hidden" name="s" value="">
        <?php endif ?>
        <?php echo TravelHelper::get_input_multilingual_wpml() ?>
        <div class="row">
            <div class=''>
                <?php
                if (!empty($fields)) {
                    $is_row = 0;
                    foreach ($fields as $key => $value) {
                        $default = array(
                            'placeholder' => ''
                        );
                        $value = wp_parse_args($value, $default);
                        $name = $value['title'];

                        if ($value['field_atrribute'] == 'google_map_location') {
                            $value['field_atrribute'] = 'location';
                        }
                        $size = '4';
                        $size = $value['layout_col_normal'];

                        if ($st_direction == 'vertical') {
                            $size = '12';
                        }
                        $size_class = " col-md-" . $size . " col-lg-" . $size . " col-sm-12 col-xs-12 ";
                        ?>
                        <div class="<?php echo esc_attr($size_class); ?>">
                            <?php echo st()->load_template('cars/elements/search/field-' . $value['field_atrribute'], false, array('data' => $value, 'field_size' => $field_size, 'st_direction' => $st_direction, 'location_name' => 'location_name', 'placeholder' => $value['placeholder'], 'st_direction' => $st_direction)) ?>
                        </div>
                        <?php
                        if ($is_row >= 12) {
                            echo "</div><div class=''>";
                            $is_row = 0;
                        }
                    }
                }
                ?>
            </div>
        </div>
        <?php
        $option = st()->get_option('car_allow_search_advance');
        $fields = st()->get_option('car_advance_search_fields');
        if ($option == 'on' and !empty($fields)):?>
            <div class="search_advance">
                <div class="expand_search_box form-group form-group-<?php echo esc_attr($field_size); ?>">
                    <span class="expand_search_box-more"> <i
                                class="btn btn-primary fa fa-plus mr10"></i><?php echo __("Advanced Search", ST_TEXTDOMAIN); ?></span>
                    <span class="expand_search_box-less"> <i
                                class="btn btn-primary fa fa-minus mr10"></i><?php echo __("Advanced Search", ST_TEXTDOMAIN); ?></span>
                </div>
                <div class="view_more_content_box">
                    <div class="row">
                        <?php
                        if (!empty($fields)) {
                            foreach ($fields as $key => $value) {
                                $default = array(
                                    'placeholder' => ''
                                );
                                $value = wp_parse_args($value, $default);
                                $name = $value['title'];
                                if ($value['field_atrribute'] == 'google_map_location') {
                                    $value['field_atrribute'] = 'location';
                                }
                                if ($name == 'google_map_location') {
                                    $name = 'location';
                                }
                                $size = '4';
                                $size = $value['layout_col_normal'];

                                if ($st_direction == 'vertical') {
                                    $size = '12';
                                }
                                $size_class = " col-md-" . $size . " col-lg-" . $size . " col-sm-12 col-xs-12 ";
                                ?>
                                <div class="<?php echo esc_attr($size_class); ?>">
                                    <?php echo st()->load_template('cars/elements/search/field-' . $value['field_atrribute'], false, array('data' => $value, 'field_size' => $field_size, 'st_direction' => $st_direction, 'location_name' => 'location_name', 'placeholder' => $value['placeholder'], 'st_direction' => $st_direction)) ?>
                                </div>
                                <?php
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <button class="btn btn-primary btn-lg" type="submit"><?php st_the_language('search_for_cars') ?></button>
    </form>
<?php
}
?>