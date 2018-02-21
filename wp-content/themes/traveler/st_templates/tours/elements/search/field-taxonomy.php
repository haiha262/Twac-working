<?php
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * Activity field taxonomy
 *
 * Created by ShineTheme
 *
 */

$default=array(
    'title'=>'',
    'taxonomy'=>'',
    'is_required'=>'on',
    'type_show_taxonomy_tours'=>'checkbox'
);

if(isset($data)){
    extract(wp_parse_args($data,$default));
}else{
    extract($default);
}

if(!isset($field_size)) $field_size='lg';
//hatran TODO this line the term is already get all Categories.
$terms = get_terms($taxonomy,array('hide_empty'=> false));

if($is_required == 'on'){
    $is_required = 'required';
}
$checkbox_item_size = 4;
if (!empty($st_direction) and $st_direction == 'vertical') { $checkbox_item_size = apply_filters("st_taxonomy_checkbox_size" , '6'); } // from 1.2.1

    if($type_show_taxonomy_tours == "select"){
        ?>
        <div class="form-group form-group-<?php echo esc_attr($field_size)?>" taxonomy="<?php echo esc_html($taxonomy) ?>">
            <label for="field-tour-tax-<?php echo esc_html($taxonomy) ?>"><?php echo esc_html( $title)?></label>
            <?php
            $args = array(
                'show_option_none' => __( '-- Select --' , ST_TEXTDOMAIN ),
                'option_none_value' => "",
                'hierarchical'      => 1 ,
                'name'              => 'taxonomy['.$taxonomy.']' ,
                'class'             => 'form-control' ,
                'id'             => 'field-tour-tax-'.$taxonomy ,
                'taxonomy'          => $taxonomy ,
            );
            $is_taxonomy = STInput::request('taxonomy');
            if(!empty($is_taxonomy[$taxonomy])){
                $args['selected'] = $is_taxonomy[$taxonomy];
            }
            /* //hatran hard code category
             * wp_dropdown_categories( $args );
            */
            ?>
            <select name="taxonomy[st_tour_type]" id="field-tour-tax-st_tour_type" class="form-control">
                <option value="">— Select —</option>

                <option class="level-0" value="145">Volunteering Holidays</option>
                <option class="level-0" value="146">Community Development Programme</option>
                <option class="level-0" value="147">Teach English Overseas</option>
                <option class="level-0" value="148">Youth Volunteering</option>
                <option class="level-0" value="149">Volunteer with Animals and Conservation</option>
                <option class="level-0" value="150">Internship Overseas Offers in sports, medical and other areas</option>
                <option class="level-0" value="152">Work with children &amp; orphanages</option>
            </select>
        </div>
    <?php }else{ ?>
        <div class="form-custom-taxonomy form-group form-group-<?php echo esc_attr($field_size)?>" taxonomy="<?php echo esc_html($taxonomy) ?>">
            <label><?php echo esc_html( $title)?></label>
            <div class="row ">
            <?php if(is_array($terms)){ ?>
                <?php
                $i = 0 ;
                foreach($terms as $k=>$v){ ?>
                    <?php $is_taxonomy = STInput::request('taxonomy');
                    $is_check = '';
                    if(!empty($is_taxonomy[$taxonomy])){
                        $data = explode(',',$is_taxonomy[$taxonomy]);
                        if(in_array($v->term_id,$data)){
                            $is_check = 'checked';
                        }
                    }
                    ?>
                    <div <?php if (($i+1) %(12/$checkbox_item_size) ==1) { echo " style='clear:both'";} ?> class="checkbox col-xs-12 col-sm-<?php echo esc_attr($checkbox_item_size);?>">
                        <label>
                            <input class="i-check item_tanoxomy" <?php echo esc_html($is_check) ?>  type="checkbox" value="<?php echo esc_attr($v->term_id) ?>" /><?php echo esc_html($v->name) ?></label>
                    </div>
                <?php $i ++;} unset($i); ?>
            <?php } ?>
            </div>
            <input type="hidden" class="data_taxonomy" name="taxonomy[<?php echo esc_html($taxonomy) ?>]" value="">
        </div>
    <?php } ?>

