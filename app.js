const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from reactjs!"
);

const parent = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "head1"),
    React.createElement("h2", {}, "head2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "head1"),
    React.createElement("h2", {}, "head2"),
  ]),
]);

const rootElment = ReactDOM.createRoot(document.getElementById("root"));
rootElment.render(parent);
