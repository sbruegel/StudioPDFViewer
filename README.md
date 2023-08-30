# Vuforia Studio PDF Viewer

This Widget supports viewing PDFs in 2D layer of Vuforia Studio. It supports local and remote PDFs (last ones recommended to load via ThingWorx FileRepository due to CORS).

*Note: This widget is not best practice because it is not based on any AngularJS directive like all other Widgets. It simply adds a Iframe and inject Mozilla PDF.js Viewer.html*


## ![properties icon](https://placehold.it/15/236192/000000?text=+) Properties

| Property | Type | Name | Description | 
| :--- | :--- | :--- | :--- | 
| `class` | string | Class | Same like HTML class attribute to handel CSS classes. If you want to add more than one class split them with a space "button-positive ion-arrow-up-a". |
| `visible` | boolean | Visible | Changes the visibility depending on the given value. |
| `src` | string | Resource | The URL to the PDF document. It it starts with app/resources/... for local PDFs and http.. for remote ones! |
| `width` | string | Width | This property sets the HTML elements style attribute and allows you to set a fixed width in units like px, %, vw, vh etc. |
| `height` | string | Height | This property sets the HTML elements `style` attribute and allows you to set a fixed height in units like px, %, vw, vh etc. |
| `currentPage` | string | Current Page | Sets a starting page (please note the page num may get cached in Vuforia View) |
| `initalZoom` | select | Inital Zoom | Defines the zoom level of the Viewer options are `auto`, `actual-size`, `page-fit`, `page-width`, `50`, `75`, `100`, ... `400` default: `auto` |
