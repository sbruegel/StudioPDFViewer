// Created by Simon Bruegel
(function() {
  function PDF() {
    return {
      elementTag: 'PDF',

      label: 'PDF',

      category: 'basic-html',

      groups : ["Other"],

      isVisibleInPalette: true,

      properties: [
        {
          name: 'class',
          label: 'Class',
          datatype: 'string',
          default: ''
        },
        {
          name: 'visible',
          label: 'Visible',
          datatype: 'boolean',
          default: true,
          isBindingTarget: true
        },
        {
          name: 'src',
          label: 'Resource',
          datatype: 'resource_url',
          allowedPatterns: ['.pdf'],
          default: '',
          isBindingTarget: true
        },
        {
          name: 'width',
          label: 'Width',
          datatype: 'string',
          default: '100%'
        },
        {
          name: 'height',
          label: 'Height',
          datatype: 'string',
          default: '50vh'
        },
        {
          name: 'currentPage',
          label: 'Current Page',
          datatype: 'string',
          isBindingTarget: true,
          default: ''
        },
        {
        name: 'initalZoom',
        label: 'Inital Zoom',
        datatype: 'select',
        editor: 'select',
        options: [
          {label: 'Automatic Zoom', value: "auto"},
          {label: 'Actual Size', value: "actual-size"},
          {label: 'Page Fit', value: "page-fit"},
          {label: 'Page Width', value: "page-width"},
          {label: '50%', value: "50"},
          {label: '75%', value: "75"},
          {label: '100%', value: "100"},
          {label: '125%', value: "125"},
          {label: '150%', value: "150"},
          {label: '200%', value: "200"},
          {label: '300%', value: "300"},
          {label: '400%', value: "400"}
        ],
        default: 'auto'
      }
      ],

	  dependencies: {
         files: ['PDF/**']
    },

    runtimeTemplate: function (props) {
        var tmpl = '<div twx-visible style="position:relative; width:{{me.width}}; height:{{me.height}}; overflow:hidden;">' +
                     '<iframe ng-src="{{(\'extensions/PDF/viewer.html?file=\' + ((me.src.startsWith(\'http\') || me.src.startsWith(\'/Thingworx\')) ? (me.src | trustUrl) : \'../../\' + me.src) + (me.currentPage != \'\' ? \'#page=\' + me.currentPage : \'\' ) + (me.initalZoom != \'\' ? \'&zoom=\' + me.initalZoom : \'\' ) | trustUrl)}}" style="width:100%; min-height: 100%; height:100%;" frameborder="0"></iframe>' +
                     '</div>';
        return tmpl;
    }

      // List of events that will displayed in the widget properties panel

      /** HTML used to when the widget is rendered within the app at runtime (in Preview or View)
       * @param {*} props: widgetProperties Widget Properties Object
       * @param {*} twxWidgetEl:  cheerio/jquery element with contained widgets
       * @param {*} fullOriginalDoc entire view element, with all widgets
       * @param {*} $ Cheerio/jquery helper instance
       */

    };
  }
  twxAppBuilder.widget('PDF', PDF);

}());
