/*
<div id="parent">
<div id="child">
<h1 class="h1"></h1>
<h2></h2>

</div>
</div>





*/

// const heading = React.createElement("h1", {}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "h1" }, "Im h1 tag"),
//     React.createElement("h2", { id: "h2" }, "im h2 tag"),
//   ]),
// ]);
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head" }, "H1 from React"),
    React.createElement("h1", { id: "head" }, "H1 from React"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head" }, "H1 from React"),
    React.createElement("h1", { id: "head" }, "H1 from React"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
