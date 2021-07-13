import creator from "../creator.js";

export default function(name) {
  var create = typeof name === "function" ? name : creator(name);
  
  // append creates new Selection w/ callback
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}
