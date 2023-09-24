import m from 'mithril';

const HelloWorld: m.Component = {
    view: function() {
	return m("h1", "Hello, World!");
    }
};

m.mount(document.body, HelloWorld);
