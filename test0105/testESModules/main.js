import { create as newBlogPost} from "blogpost.js";
//error: Relative import path "blogpost.js" not prefixed with / or ./ or ../
//运行不了

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();