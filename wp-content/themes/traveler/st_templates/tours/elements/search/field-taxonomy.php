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
             //hatran hard code category
            wp_dropdown_categories( $args );
            //hatran add select type in Home Tour
            createXMLfile(TravelHelper::getListTaxonomy(''));

            ?>
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

<?php
//hatran add select type in Home Tour
function createXMLfile($taxonomyArray){

    $filePath = 'taxonomy.xml';
    $dom     = new DOMDocument('1.0', 'utf-8');
    $taxonomy      = $dom->createElement('Taxonomy');
    $dom->appendChild($taxonomy);

    $current_location_id = "";
    for($i=0; $i<count($taxonomyArray); $i++){
        $location_id       =  $taxonomyArray[$i]->location_id;

        $location_name      =  $taxonomyArray[$i]->location_name;

        //$post_id    =  $taxonomyArray[$i]->post_id;

        $term_taxonomy_id     =  $taxonomyArray[$i]->term_taxonomy_id;

        $taxonomy_name      =  $taxonomyArray[$i]->taxonomy_name;

        // Add node Location
        $location = $dom->createElement('location');
        $location->setAttribute('locationId', $location_id);
        $location->setAttribute('locationName', $location_name);
        $taxonomy->appendChild($location);

        //add node Post
        //$post = $dom->createElement('post');
        //$post->setAttribute('postId',$post_id);

        //$post = $dom->createElement('post');
        //$post->setAttribute('postId',$post_id);

        $categoriesID     = $dom->createElement('categoriesID', $term_taxonomy_id);
        $categoriesName     = $dom->createElement('categoriesName', $taxonomy_name);


        $location->appendChild($categoriesID);
        $location->appendChild($categoriesName);

        //$location->appendChild($post);

    }



    $dom->save($filePath);

}
?>