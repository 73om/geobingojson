/* Copyright (c) 2022, somegonker / https://heydoesthis.work>
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. */

const btnRemove = document.querySelector('#btnRemove');
const countrylist = document.querySelector('#countrylist');
const btnJSON = document.querySelector('#btnJSON');
const checkbox = document.getElementById('freesquare');
const randomise = document.getElementById('randomise');
var svgElement = document.querySelector('.mapsvg')
var countries = 25;
const countrycodes = {
   "Afghanistan": "af",
   "Åland Islands": "ax",
   "Albania": "al",
   "Algeria": "dz",
   "American Samoa": "as",
   "Andorra": "ad",
   "Angola": "ao",
   "Anguilla": "ai",
   "Antarctica": "aq",
   "Antigua and Barbuda": "ag",
   "Argentina": "ar",
   "Armenia": "am",
   "Aruba": "aw",
   "Australia": "au",
   "Austria": "at",
   "Azerbaijan": "az",
   "Bahamas": "bs",
   "Bahrain": "bh",
   "Bangladesh": "bd",
   "Barbados": "bb",
   "Belarus": "by",
   "Belgium": "be",
   "Belize": "bz",
   "Benin": "bj",
   "Bermuda": "bm",
   "Bhutan": "bt",
   "Bolivia": "bo",
   "Bosnia and Herzegovina": "ba",
   "Botswana": "bw",
   "Bouvet Island": "bv",
   "Brazil": "br",
   "British Indian Ocean Territory": "io",
   "Brunei": "bn",
   "Bulgaria": "bg",
   "Burkina Faso": "bf",
   "Burundi": "bi",
   "Cambodia": "kh",
   "Cameroon": "cm",
   "Canada": "ca",
   "Cape Verde": "cv",
   "Cayman Islands": "ky",
   "CAR": "cf",
   "Chad": "td",
   "Chile": "cl",
   "China": "cn",
   "Christmas Island": "cx",
   "Cocos (Keeling) Islands": "cc",
   "Colombia": "co",
   "Comoros": "km",
   "Congo (ROC)": "cg",
   "DRC": "cd",
   "Cook Islands": "ck",
   "Costa Rica": "cr",
   "Côte d\x27Ivoire": "ci",
   "Croatia": "hr",
   "Cuba": "cu",
   "Cyprus": "cy",
   "Czechia": "cz",
   "Denmark": "dk",
   "Djibouti": "dj",
   "Dominica": "dm",
   "Dominican Republic": "do",
   "Ecuador": "ec",
   "Egypt": "eg",
   "El Salvador": "sv",
   "Equatorial Guinea": "gq",
   "Eritrea": "er",
   "Estonia": "ee",
   "Ethiopia": "et",
   "Falkland Islands": "fk",
   "Faroe Islands": "fo",
   "Fiji": "fj",
   "Finland": "fi",
   "France": "fr",
   "French Guiana": "gf",
   "French Polynesia": "pf",
   "French Southern Territories": "tf",
   "Gabon": "ga",
   "Gambia": "gm",
   "Georgia": "ge",
   "Germany": "de",
   "Ghana": "gh",
   "Gibraltar": "gi",
   "Greece": "gr",
   "Greenland": "gl",
   "Grenada": "gd",
   "Guadeloupe": "gp",
   "Guam": "gu",
   "Guatemala": "gt",
   "Guernsey": "gg",
   "Guinea": "gn",
   "Guinea-Bissau": "gw",
   "Guyana": "gy",
   "Haiti": "ht",
   "Heard and Mcdonald Islands": "hm",
   "Vatican City": "va",
   "Honduras": "hn",
   "Hong Kong": "hk",
   "Hungary": "hu",
   "Iceland": "is",
   "India": "in",
   "Indonesia": "id",
   "Iran": "ir",
   "Iraq": "iq",
   "Ireland": "ie",
   "Isle of Man": "im",
   "Israel": "il",
   "Italy": "it",
   "Jamaica": "jm",
   "Japan": "jp",
   "Jersey": "je",
   "Jordan": "jo",
   "Kazakhstan": "kz",
   "Kenya": "ke",
   "Kiribati": "ki",
   "DPRK": "kp",
   "South Korea": "kr",
   "Kuwait": "kw",
   "Kyrgyzstan": "kg",
   "Laos": "la",
   "Latvia": "lv",
   "Lebanon": "lb",
   "Lesotho": "ls",
   "Liberia": "lr",
   "Libya": "ly",
   "Liechtenstein": "li",
   "Lithuania": "lt",
   "Luxembourg": "lu",
   "Macao": "mo",
   "North Macedonia": "mk",
   "Madagascar": "mg",
   "Malawi": "mw",
   "Malaysia": "my",
   "Maldives": "mv",
   "Mali": "ml",
   "Malta": "mt",
   "Marshall Islands": "mh",
   "Martinique": "mq",
   "Mauritania": "mr",
   "Mauritius": "mu",
   "Mayotte": "yt",
   "Mexico": "mx",
   "Micronesia": "fm",
   "Moldova": "md",
   "Monaco": "mc",
   "Mongolia": "mn",
   "Montenegro": "me",
   "Montserrat": "ms",
   "Morocco": "ma",
   "Mozambique": "mz",
   "Myanmar": "mm",
   "Namibia": "na",
   "Nauru": "nr",
   "Nepal": "np",
   "Netherlands": "nl",
   "Netherlands Antilles": "an",
   "New Caledonia": "nc",
   "New Zealand": "nz",
   "Nicaragua": "ni",
   "Niger": "ne",
   "Nigeria": "ng",
   "Niue": "nu",
   "Norfolk Island": "nf",
   "NMI": "mp",
   "Norway": "no",
   "Oman": "om",
   "Pakistan": "pk",
   "Palau": "pw",
   "Palestine": "ps",
   "Panama": "pa",
   "Papua New Guinea": "pg",
   "Paraguay": "py",
   "Peru": "pe",
   "Philippines": "ph",
   "Pitcairn Islands": "pn",
   "Poland": "pl",
   "Portugal": "pt",
   "Puerto Rico": "pr",
   "Qatar": "qa",
   "Réunion": "re",
   "Romania": "ro",
   "Russia": "ru",
   "Rwanda": "rw",
   "Saint Helena": "sh",
   "Saint Kitts and Nevis": "kn",
   "Saint Lucia": "lc",
   "Saint Pierre and Miquelon": "pm",
   "Saint Vincent and the Grenadines": "vc",
   "Samoa": "ws",
   "San Marino": "sm",
   "Sao Tome and Principe": "st",
   "Saudi Arabia": "sa",
   "Senegal": "sn",
   "Serbia": "rs",
   "Seychelles": "sc",
   "Sierra Leone": "sl",
   "Singapore": "sg",
   "Slovakia": "sk",
   "Slovenia": "si",
   "Solomon Islands": "sb",
   "Somalia": "so",
   "South Africa": "za",
   "South Georgia and the South Sandwich Islands": "gs",
   "Spain": "es",
   "Sri Lanka": "lk",
   "Sudan": "sd",
   "Suriname": "sr",
   "Svalbard and Jan Mayen": "sj",
   "eSwatini": "sz",
   "Sweden": "se",
   "Switzerland": "ch",
   "Syria": "sy",
   "Taiwan": "tw",
   "Tajikistan": "tj",
   "Tanzania": "tz",
   "Thailand": "th",
   "Timor-Leste": "tl",
   "Togo": "tg",
   "Tokelau": "tk",
   "Tonga": "to",
   "Trinidad and Tobago": "tt",
   "Tunisia": "tn",
   "Turkey": "tr",
   "Turkmenistan": "tm",
   "Turks and Caicos": "tc",
   "Tuvalu": "tv",
   "Uganda": "ug",
   "Ukraine": "ua",
   "UAE": "ae",
   "UK": "gb",
   "USA": "us",
   "United States MOI": "um",
   "Uruguay": "uy",
   "Uzbekistan": "uz",
   "Vanuatu": "vu",
   "Venezuela": "ve",
   "Vietnam": "vn",
   "British Virgin Islands": "vg",
   "US Virgin Islands": "vi",
   "Wallis and Futuna": "wf",
   "Western Sahara": "eh",
   "Yemen": "ye",
   "Zambia": "zm",
   "Zimbabwe": "zw"
}

function addcountry(name){
   var countryname= name;
   index=undefined;
   index=indexMatchingText(countrylist, name);
   if (index==null){
    if (countrylist.length==countries){
      alert("Failed to add country, limit reached ("+countries+").")
      return
    }
    // create a new option
    const option = new Option(countryname, countryname);
    // add it to the list
    var countrycode=""
    countrylist.add(option, undefined);
    countrycode=countrycodes[countryname];
    document.querySelector(".mapsvg").getSVGDocument().getElementById(countrycode).setAttribute("style", "fill-opacity:1;stroke:#000000;stroke-width:1.20901442;stroke-miterlimit:3.97446823;stroke-dasharray:none;stroke-opacity:1;fill:#000 !important;stroke:#ccc !important;");
    phindex=undefined;
    phindex=indexMatchingText(countrylist, "Use map to select countries");
    if (phindex !== undefined) {
      countrylist.remove(phindex);
    }
    document.getElementById("listlabel").innerHTML = "Selected countries ("+countrylist.length+"/"+countries+"):"
   } else {
    countrycode=countrycodes[countryname];
    document.querySelector(".mapsvg").getSVGDocument().getElementById(countrycode).setAttribute("style", "fill-opacity:1;stroke:#000000;stroke-width:0.99986994;stroke-miterlimit:3.97446823;stroke-dasharray:none;stroke-opacity:1");
    countrylist.remove(index);
    document.getElementById("listlabel").innerHTML = "Selected countries ("+countrylist.length+"/"+countries+"):";
    if (countrylist.length==0) {
      const option = new Option("Use map to select countries", "placeholder");
      countrylist.add(option, undefined);
      option.disabled = true;
    }
   }
}

// remove selected option
btnRemove.onclick = (e) => {
e.preventDefault();

// save the selected options
let selected = [];
var countrycode=""
for (let i = 0; i < countrylist.options.length; i++) {
   selected[i] = countrylist.options[i].selected;
}

// remove all selected option
let index = countrylist.options.length;
while (index--) {
   if (selected[index]) {
      countrycode=countrycodes[countrylist[index].childNodes[0].nodeValue];
      document.querySelector(".mapsvg").getSVGDocument().getElementById(countrycode).setAttribute("style", "fill-opacity:1;stroke:#000000;stroke-width:0.99986994;stroke-miterlimit:3.97446823;stroke-dasharray:none;stroke-opacity:1");
      countrylist.remove(index);
   }
}
document.getElementById("listlabel").innerHTML = "Selected countries ("+countrylist.length+"/"+countries+"):";
if (countrylist.length==0){
   const option = new Option("Use map to select countries", "placeholder");
   countrylist.add(option, undefined);
   option.disabled = true;
}
};

function indexMatchingText(ele, text) {
    for (var i=0; i<ele.length;i++) {
        if (ele[i].childNodes[0].nodeValue === text){
            return i;
        }
    }
    return undefined;
}

function shuffle(array) {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle.
   while (currentIndex != 0) {
 
     // Pick a remaining element.
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 
   return array;
 }

btnJSON.onclick = (e) => {
   e.preventDefault();
   if (countrylist.length < countries) {
      alert("Error: You haven't selected "+countries+" countries. Please select another "+(countries-countrylist.length)+" countries.");
      document.getElementById("output").innerHTML = "Error: You didn't select enough countries.";
      return;
   } else {
      if (countrylist.length > countries) {
         alert("Error: You haven't selected "+countries+" countries. Please deselect "+(countrylist.length-countries)+" countries.");
         document.getElementById("output").innerHTML = "Error: You selected too many countries.";
         return;
      }
   }
   var ourlist=[];
   for (var i=0; i<countrylist.length;i++) {
      ourlist[i] = (countrylist[i].childNodes[0].nodeValue);
   }
   if (randomise.checked) {
      ourlist = shuffle(ourlist);
   }
   if (countries == 24){
      ourlist.splice(12,0, "Free Space");
   }
   ourdict={}
   for (var i=0; i<ourlist.length;i++) {
      ourdict["name"+i] = (ourlist[i]);
   }
   var ourJSON = JSON.stringify(ourdict);
   ourJSON=ourJSON.replace(/[0-9]/g, '');
   ourJSON=ourJSON.replace(/[,]/g, '}$&\n{');
   ourJSON="["+ourJSON+"]"
   document.getElementById("output").innerHTML = ourJSON;
   navigator.clipboard.writeText(ourJSON);
   alert("Copied the JSON to clipboard, ready to paste into Bingosync\n\n"+ourJSON);
   document.getElementById("countryform").style.display="none";
   document.getElementById("output").innerHTML = "\nCopied the JSON to clipboard - ready to paste into Bingosync, if the automagic copy didn't work for whatever reason, you can highlight the JSON below and copy:\n\n"+ourJSON;
   document.getElementById("btnReset").style.display="block"
}

checkbox.addEventListener('change', (event) => {
  phindex=undefined
  phindex=indexMatchingText(countrylist, "Use map to select countries");
  if (event.currentTarget.checked) {
    if (countrylist.length == 25) {
      alert("You already have 25 countries in the list.\nDeleting the last one to allow for \"Free Space\" Square");
      countrycode=countrycodes[countrylist[24].childNodes[0].nodeValue];
      document.querySelector(".mapsvg").getSVGDocument().getElementById(countrycode).setAttribute("style", "fill-opacity:1;stroke:#000000;stroke-width:0.99986994;stroke-miterlimit:3.97446823;stroke-dasharray:none;stroke-opacity:1");   
      countrylist.remove(24);
    }
    countries = 24
    if (phindex !== undefined) {
      document.getElementById("listlabel").innerHTML = "Selected countries ("+(countrylist.length-1)+"/"+countries+"):"; 
    } else {
      document.getElementById("listlabel").innerHTML = "Selected countries ("+countrylist.length+"/"+countries+"):";
    }
  } else {
    countries = 25
    if (phindex !== undefined) {
      document.getElementById("listlabel").innerHTML = "Selected countries ("+(countrylist.length-1)+"/"+countries+"):"; 
    } else {
      document.getElementById("listlabel").innerHTML = "Selected countries ("+countrylist.length+"/"+countries+"):";
    }
  }
})

btnReset.onclick = (e) => {
   e.preventDefault();
   
   window.location.reload()
}