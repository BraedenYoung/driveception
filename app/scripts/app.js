/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Configure app parameters here
  app.backendUrl = 'https://script.google.com/macros/s/AKfycbx42-3v5RH0PV0VZO3VESpiKgFTA6ZtLUskES7nzKDPCh9fQxJE/exec';
  app.folders = [{folderId: '0BxWgHwtOE88_SlZOVUlRT3lwLXc', title: 'Projects'},
                 {folderId: '0BxWgHwtOE88_N3lGM3hiR2lwcms', title: 'Atricles'}];

  //Optional settings, comment/remove lines if not needed
  // app.aboutFileId = '1HNhQgOjP4xXTPMKEW94tz54baijIBH4XiLaM4-hn0u8';
  // app.socials = [{'name':'Google +',
  //                  'url':'https://plus.google.com/+MauroSmokybobSolcia'},
  //                {'name':'Youtube',
  //                  'url':'https://www.youtube.com/user/hackbob84'},
  //                {'name':'GitHub',
  //                  'url':'https://github.com/SmokyBob/'},
  //                {'name':'Donate - PayPal',
  //                  'url':'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=F7WPXSVUAJKT4&lc=IT&item_name=Mauro%20Smokybob%20Solcia&item_number=Offer%20me%20a%20Big%20Coffee&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted'},
  //                {'name':'Engeene.it',
  //                  'url':'http://www.engeene.it/author/mauro-solcia/'},
  //                {'name':'Google Developers Italia - YT PlayList',
  //                  'url':'http://youtu.be/QRsXBXm3-UM?list=PLOU2XLYxmsIKU5doDlNwQlq7OO6hAY8K-'},
  //                {'name':'Curriculum Vitae',
  //                  'url':'https://docs.google.com/document/d/1lMAhJEki3K9p52BAJpgCyXMrIZ6gNi22qqom-PTUdmg/edit?usp=sharing'}
  //               ];

  // Bound to the main headed panel title
  app.blogTitle = 'devBlog';
  app.showSocials = (app.socials && app.socials.length > 0);

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock&roll !!!');
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  app.toggleSocialCollapse = function() {
    document.querySelector('#socialSubmenu').toggle();
  };

  app._forceRefresh = function(event){
    document.querySelector('articles-list').refreshList(event);
  };

  app._getArticle = function(articleId, articleList) {
    var article = {};
    if (articleList) {
      articleList.some(function(item) {
        if (item.id === articleId) {
          article = item;
          //Set the Title of the page
          app.title = article.title;
          return true;
        }
        return false;
      });
    }
    return article;
  };

  app._articleUrl = function(articleId, articleList){
    var article = null;
    if (articleList) {
      articleList.some(function(item) {
        if (item.id === articleId) {
          article = item;
          //Set the Title of the page
          app.title = article.title;
          return true;
        }
        return false;
      });
    }
    if (article){
      return app._getUrl(article.id);
    }
  };
  app._getUrl = function(id) {
    //Request URL:https://script.google.com/macros/s/AKfycbwUTpDFOpFxblYhrK8g7NN_IxbhhOTpzCZJo3ZNAFXWAPVlOPKA/exec

    return 'https://docs.google.com/document/d/' + id + '/pub?embedded=true';
  };
})(document);
