/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //app.checkConnection();
        //app.renderHomeView();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //  teste checkconnection()
        this.checkConnection();

        console.log('Received Event: ' + id);
    },
    
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        this.showAlert('Connection type: ' + states[networkState],'Connection type');
    },
    
    renderHomeView: function() {
    var html =
            "<div data-role='header' data-role='fieldcontain' data-position='fixed'>"+
        "<a href='#defaultpanel' data-role='button' data-corners='false' data-theme='c'>menu</a>"+
        "<h1>Basic App</h1>"+
            "</div>"+
            
                "<div data-role='content'>"+
                    
        "<!-- section header content -->"+
                        "<div class='header-content' >"+
                            "<h1>Time Now</h1>"+
                            "<p>what time is it now?</p>"+
                        "</div>"+
                    
        "<!-- section select city -->"+
                        "<div data-role='fieldcontain'>"+
                            "<label for='sltCity'> Select city: </label>"+
                            "<select data-inline='false' data-placeholder='true' name='sltCity' id='sltCity'></select>"+
                        "</div>"+
                    
        "<!-- section button Time -->"+
                        "<div class='section-ButtonTime' id='section-ButtonTime'>"+
                            "<input data-role='button' class='buttonTime' id='buttonTime' type='button' value='Try it' onclick='test_call_xml()'/>"+
                        "</div>"+
                    
        "<!-- section response content -->"+
                    "<div class='response-content' id='response-content'></div>"+
                "</div>"+
            
            "<div data-role='footer' data-position='fixed'>"+
            "</div>"+
            
             "<!-- defaultpanel -->"+
            "<div data-role='panel' id='defaultpanel' data-theme='a'>"+
                "<div class='panel-content'>"+
                    "<h3>Default panel options</h3>"+
                    "<p>This panel has all the default options: positioned on the left with the reveal display mode."+
                                "The panel markup is <em>before</em> the header, content and footer in the source order.</p>"+
                    "<p>To close, click off the panel, swipe left or right, hit the Esc key, or use the button below:</p>"+
                    "<a href='#demo-links' data-rel='close' data-role='button' data-theme='c' data-icon='delete' data-inline='true'>Close panel</a>"+
                "</div><!-- /content wrapper for padding -->"+
            "</div><!-- /defaultpanel -->"
    $('body').html(html);
    
    }
};
