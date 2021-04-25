import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* RESET BEGIN */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
    list-style: none;
    padding: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
button,
input,
optgroup,
select,
textarea {

  margin: 0;
}
button,
input {
  overflow: visible;
  padding: 0;
}
button,
select {
  text-transform: none;
}
button {
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
}
a,
button {
    cursor: pointer;
    background: transparent;
    border: 0 none;
    outline: none;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
}
/* RESET END */

html {
    font-size:10px;
    background-color: ${({ background }) => background || 'ffffff'};
}
body {
  font-family: 'Founders Grotesk Light';
  background-color: ${({ background }) => background || 'ffffff'};
}

.underline{
  text-decoration:underline;
}

/*Reset input iphone devices*/
input {
  border-radius: 0;
  -webkit-appearance: none;
}

input[type="search"] {
  -webkit-appearance: none;
}

img, svg{

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  
}
/*Global function classes*/
.margin_b-24{
  margin-bottom:24px;
}
.margin_b-16{
  margin-bottom:16px;
}
.margin_b-4{
margin-bottom:4px;
}

@media screen and (-webkit-min-device-pixel-ratio:2), screen and (min-resolution:2dppx) {
  body {
   -moz-osx-font-smoothing:grayscale;
   -webkit-font-smoothing:antialiased;
  }
 }
`;
/* Responsive Visibility */

export default GlobalStyles;
