<?php
/**
 * @package WordPress
 * @subpackage Traveler
 * @since 1.0
 *
 * function
 *
 * Created by ShineTheme
 *
 */
if(!defined('ST_TEXTDOMAIN'))
define ('ST_TEXTDOMAIN','traveler');

if(!defined('ST_TRAVELER_VERSION'))
{
    $theme=wp_get_theme();
	if($theme->parent())
	{
		$theme=$theme->parent();
	}
    define ('ST_TRAVELER_VERSION',$theme->get( 'Version' ));
}


$status=load_theme_textdomain(ST_TEXTDOMAIN,get_stylesheet_directory().'/language');

get_template_part('inc/class.traveler');

/*get_template_part('demo/landing_function');
get_template_part('demo/demo_functions');*/

//hatran add select type in Home Tour
//createXMLfile();


//hatran add select type in Home Tour
function createXMLfile(){
    $taxonomyArray = TravelHelper::getListTaxonomy('');

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

add_action( 'init', 'createXMLfile', 1 );

