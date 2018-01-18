<?php
/**
 * Created by wpbooking.
 * Developer: nasanji
 * Date: 2/6/2017
 * Version: 1.0
 */
wp_enqueue_style( 'st-select.css' );
wp_enqueue_script( 'st-select.js' );
$default=array(
    'title'=>'',
    'placeholder'=>'',
    'is_required'=>'',
);
if(isset($data)){
    extract(wp_parse_args($data,$default));
}else{
    extract($default);
}

if($is_required == 'on'){
    $is_required = 'required';
}

if(!isset($field_size)) $field_size='lg';

?>
<div class="form-group form-group-<?php echo esc_attr($field_size)?> form-group-icon-left">
    <label for="ss_location_origin"><?php echo esc_html( $title)?></label>
   
    <select id="cabClassSelect" name="cabClassSelect" title="Choose flight class" align="center">
        <option value="">Any</option>
        <option value="E" selected="selected">Economy</option>
        <option value="S">Premium Economy</option>
        <option value="B">Business</option>
        <option value="J">Premium Business</option>
        <option value="F">First</option>
        <option value="P">Premium First</option>
    </select>

    <input name="fareType" value="YYYYN" type="hidden">
    <input name="wait" value="true" type="hidden">
    <input name="searchAir.segments[1].arrivalCity" id="searchAir.segments1.arrivalCity" type="hidden">
    <input name="searchAir.segments[1].departCity" id="searchAir.segments1.departCity" type="hidden">
    <input name="searchAir.segments[0].cabinIndicator" id="searchAir.segments0.cabinIndicator" type="hidden">
    <input name="searchAir.segments[1].cabinIndicator" id="searchAir.segments1.cabinIndicator" type="hidden">
   
</div>