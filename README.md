React Flux Demo

This is a simplest possible React app to show using Flux.

It has two components, ButtonComponent and LabelComponent. Pressing the button
creates an Action via the Dispatcher, which updates the LabelStore, which emits
an event, which then triggers the LabalComponent to pick up the data change from
the store.

The starter was created using create-react-app.