"use strict";
var fname = 'Joe';
var age = 23;
var isSaved = true;
var telNumber = [8012334444, 8112223222, 9012221212];
var customer = ['Joe', 'Jill', 'Susan'];
var userId = 'justus24';
var fn2 = function (username) {
    console.log("Hello ".concat(username));
};
var myName = 'Ediongsenyene';
var url = 'https://www.g-lh.org/lh-02';
var regexpTest = /\b^w+\b/g;
console.log(url.match(regexpTest));
var person = {
    name: 'Joseph',
    walk: function () {
        console.log('Walking!!');
    },
    talk: function () {
        console.log("".concat(this.name, " can talk."));
    },
    whoYou: function () {
        console.log(this);
    },
};
console.log(person.name);
person.walk();
var whoYou = person.whoYou;
whoYou();
var whoYouNew = person.whoYou.bind(person);
whoYouNew();
var square = function (n) { return n * n; };
console.log(square(5));
var jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];
var activeJobs = jobs.filter(function (job) { return job.isActive; });
console.log(activeJobs);
var colors = ['red', 'green', 'blue'];
var items = colors.map(function (color) { return "<li>".concat(color, "</li>"); });
console.log(items);
