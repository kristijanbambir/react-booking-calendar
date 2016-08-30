# react booking calendar generated

Get the AMD module located at `react-booking-calendar-generated.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactBookingCalendarGenerated': 'react-booking-calendar-generated'
  }
});

require(['react', 'ReactBookingCalendarGenerated'], function(React, ReactBookingCalendarGenerated) {

  React.render(React.createElement(ReactBookingCalendarGenerated), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
