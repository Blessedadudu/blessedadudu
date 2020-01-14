import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <div>
            <section class="map" id="map"> 
                {<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.284724447974!2d3.332773919003942!3d6.580137993931435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9210951dba3d%3A0xc3d4b92e003891c!2sIkeja%20GRA%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1568890083097!5m2!1sen!2sng"
                width="100%" height="450" frameborder="0" style={{ border: '10px' }} title='map' allowfullscreen></iframe>}
                {/* <!-- map info --> */}
                <div class="map_info flexbox-parent flexbox-parent-medium">
                {/* <!-- single item --> */}
                <div class="map-item item-margin">
                    <div class="map-item_icon">
                    <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h2 class="map-item_title">Location</h2>
                    <p class="map-item_text">Lagos, Nigeria</p>
                </div>
                {/* <!-- end of single item --> */}
                {/* <!-- single item --> */}
                <div class="map-item item-margin">
                    <div class="map-item_icon">
                    <i class="fas fa-phone"></i>
                    </div>
                    <h2 class="map-item_title">Home</h2>
                    <p class="map-item_text">08072250406</p>
                </div>
                {/* <!-- end of single item --> */}
                {/* <!-- single item --> */}
                <div class="map-item item-margin">
                    <div class="map-item_icon">
                    <i class="fas fa-envelope"></i>
                    </div>
                    <h2 class="map-item_title">Mail</h2>
                    <a href="mailto:adududuke@gmail.com" ><p class="map-item_text mail">adududuke@gmail.com</p></a>
                </div>
                {/* <!-- end of single item --> */}
                </div>
            </section>
        </div>
    )
}
