@import url(http://fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic-ext,latin-ext,cyrillic,greek-ext,greek,vietnamese);
@font-face {
  font-family: "demurecontrols";
  src: url("http://cssslider.com/sliders/pen/demurecontrols.eot?cssslidertheme=demure");
  src: url("http://cssslider.com/sliders/pen/demurecontrols.eot#iefix?cssslidertheme=demure") format("embedded-opentype"),
      url("http://cssslider.com/sliders/pen/demurecontrols.woff?cssslidertheme=demure") format("woff"),
      url("http://cssslider.com/sliders/pen/demurecontrols.ttf?cssslidertheme=demure") format("truetype"),
      url("http://cssslider.com/sliders/pen/demurecontrols.svg#demure?cssslidertheme=demure") format("svg");
  font-weight: normal;
  font-style: normal;
}

.text-1 {
  font-family:Roboto;
}
.text-1 a{
  color: #000000;
  text-decoration: none;
}
.csslider1 {
  display: inline-block;
  position: relative;
  max-width: 680px;
  
  width: 100%;
  margin-top: 10px;
}
.csslider1 > .cs_anchor {
  display: none;
}
.csslider1 > ul {
  position: relative;
  z-index: 1;
  font-size: 0;
  line-height: 0;
  margin: 0 auto;
  padding: 0;
  
  overflow: hidden;
  white-space: nowrap;
}
.csslider1 > ul > li.img img {
  width: 100%;
}
.csslider1 > ul > li.img {
  font-size: 0pt;

  -khtml-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.csslider1 > ul > li {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 15px;
  font-size: initial;
  line-height: normal;
  white-space: normal;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.csslider1 .cs_lnk{
  position: absolute;
  top: -9999px;
  left: -9999px;
  font-size: 0pt;
  opacity: 0;
  filter: alpha(opacity=0);
}.csslider1 > .cs_arrowprev,
.csslider1 > .cs_arrownext {
  position: absolute;
  top: 50%;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 5;
}
.csslider1 > .cs_arrowprev > label,
.csslider1 > .cs_arrownext > label {
  position: absolute;

  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  z-index: -1;
}
.csslider1 > .cs_arrowprev {
  left: 0;
}
.csslider1 > .cs_arrownext {
  right: 0;
}

.csslider1 > .cs_arrowprev > label.num2,
.csslider1 > .cs_arrownext > label.num1 {
  opacity: 1;
  z-index: 5;
}
.csslider1 > .slide:checked ~ .cs_arrowprev > label,
.csslider1 > .slide:checked ~ .cs_arrownext > label {
  opacity: 0;
  z-index: -1;
}



.csslider1 > #cs_slide1_0:checked ~ .cs_arrowprev > label.num2,
.csslider1 > #cs_slide1_0:checked ~ .cs_arrownext > label.num1, 
.csslider1 > #cs_slide1_1:checked ~ .cs_arrowprev > label.num0,
.csslider1 > #cs_slide1_1:checked ~ .cs_arrownext > label.num2, 
.csslider1 > #cs_slide1_2:checked ~ .cs_arrowprev > label.num1,
.csslider1 > #cs_slide1_2:checked ~ .cs_arrownext > label.num0 {
  opacity: 1;
  z-index: 5;
}

/* calculate autoplay */
@-webkit-keyframes arrow {
  0%, 33.32333333333334% { opacity: 1; z-index: 5; }
  33.333333333333336%, 100% { opacity: 0; z-index: -1; }
}
@-moz-keyframes arrow {
  0%, 33.32333333333334% { opacity: 1; z-index: 5; }
  33.333333333333336%, 100% { opacity: 0; z-index: -1; }
}
@-ms-keyframes arrow {
  0%, 33.32333333333334% { opacity: 1; z-index: 5; }
  33.333333333333336%, 100% { opacity: 0; z-index: -1; }
}
@-o-keyframes arrow {
  0%, 33.32333333333334% { opacity: 1; z-index: 5; }
  33.333333333333336%, 100% { opacity: 0; z-index: -1; }
}
@keyframes arrow {
  0%, 33.32333333333334% { opacity: 1; z-index: 5; }
  33.333333333333336%, 100% { opacity: 0; z-index: -1; }
}


.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num2,
.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num1,
.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num2,
.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num1 {
  -webkit-animation: arrow 24000ms infinite -2000ms;
  -moz-animation: arrow 24000ms infinite -2000ms;
  -ms-animation: arrow 24000ms infinite -2000ms;
  -o-animation: arrow 24000ms infinite -2000ms;
  animation: arrow 24000ms infinite -2000ms;
  
}
.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num0,
.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num2,
.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num0,
.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num2 {
  -webkit-animation: arrow 24000ms infinite 6000ms;
  -moz-animation: arrow 24000ms infinite 6000ms;
  -ms-animation: arrow 24000ms infinite 6000ms;
  -o-animation: arrow 24000ms infinite 6000ms;
  animation: arrow 24000ms infinite 6000ms;
  
}
.csslider1 > #cs_play1:checked ~ .cs_arrowprev > label.num1,
.csslider1 > #cs_play1:checked ~ .cs_arrownext > label.num0,
.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label.num1,
.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label.num0 {
  -webkit-animation: arrow 24000ms infinite 14000ms;
  -moz-animation: arrow 24000ms infinite 14000ms;
  -ms-animation: arrow 24000ms infinite 14000ms;
  -o-animation: arrow 24000ms infinite 14000ms;
  animation: arrow 24000ms infinite 14000ms;
  
}


.csslider1.cs_pauseHover:hover > .cs_arrowprev > label,
.csslider1 > #cs_pause1:checked ~ .cs_arrowprev > label,
.csslider1.cs_pauseHover:hover > .cs_arrownext > label,
.csslider1 > #cs_pause1:checked ~ .cs_arrownext > label {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -ms-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}

/* stop */
.csslider1 > .slide:checked ~ .cs_arrowprev > label,
.csslider1 > .slide:checked ~ .cs_arrownext > label {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  -o-animation: none;
  animation: none;
}


/* /calculate autoplay */
.csslider1 > .cs_bullets {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 6;
  font-size: 0;
  line-height: 8pt;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.csslider1 > .cs_bullets > div {
  margin-left: -50%;
  width: 100%;
}
.csslider1 > .cs_bullets > label {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.csslider1 > .cs_bullets > label > .cs_thumb {
  visibility: hidden;
  position: absolute;
  opacity: 0;
  z-index: 1;
  line-height: 0;
  left: -44px;
  top: -48px;
}.csslider1 > .cs_description {
  z-index: 3;
}
.csslider1 > .cs_description a,
.csslider1 > .cs_description a:visited,
.csslider1 > .cs_description a:active {
  color: inherit;
}
.csslider1 > .cs_description a:hover {
  text-decoration: none;
}
.csslider1 > .cs_description > label {
  position: absolute;
  word-wrap: break-word;
  white-space: normal;
  text-align: left;
  max-width: 50%;
  left: 0;
}
.csslider1 > .cs_description > label > span {
  vertical-align: top;
}
.csslider1 > .cs_description > label span {
  display: inline-block;
}

.csslider1 > ul > li {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  opacity: 0;
  z-index: 1;
  
    -webkit-transition: opacity 2000ms ease, -webkit-transform 24000ms linear;
    -moz-transition: opacity 2000ms ease, -moz-transform 24000ms linear;
    -ms-transition: opacity 2000ms ease, -ms-transform 24000ms linear;
    -o-transition: opacity 2000ms ease, -o-transform 24000ms linear;
    transition: opacity 2000ms ease, transform 24000ms linear;
    
}

.csslider1 > ul > li.num0 {
  opacity: 0;
  -webkit-transform: scale(1.3) translate(-11.53846%, 11.53846%);
  -moz-transform: scale(1.3) translate(-11.53846%, 11.53846%);
  -ms-transform: scale(1.3) translate(-11.53846%, 11.53846%);
  -o-transform: scale(1.3) translate(-11.53846%, 11.53846%);
  transform: scale(1.3) translate(-11.53846%, 11.53846%);
  
}
.csslider1 > ul > li.num1 {
  opacity: 0;
  -webkit-transform: scale(1.3) translate(11.53846%, 11.53846%);
  -moz-transform: scale(1.3) translate(11.53846%, 11.53846%);
  -ms-transform: scale(1.3) translate(11.53846%, 11.53846%);
  -o-transform: scale(1.3) translate(11.53846%, 11.53846%);
  transform: scale(1.3) translate(11.53846%, 11.53846%);
  
}
.csslider1 > ul > li.num2 {
  opacity: 0;
  -webkit-transform: scale(1.3) translate(-11.53846%, -11.53846%);
  -moz-transform: scale(1.3) translate(-11.53846%, -11.53846%);
  -ms-transform: scale(1.3) translate(-11.53846%, -11.53846%);
  -o-transform: scale(1.3) translate(-11.53846%, -11.53846%);
  transform: scale(1.3) translate(-11.53846%, -11.53846%);
  
}


.csslider1 > ul > li.num0 {
  opacity: 1;
  z-index: 2;
}
.csslider1 > .slide:checked ~ ul > li.num0 {
  opacity: 0;
  z-index: 1;
}


.csslider1 > #cs_slide1_0:checked ~ ul > li.num0,.csslider1 > #cs_slide1_1:checked ~ ul > li.num1,.csslider1 > #cs_slide1_2:checked ~ ul > li.num2 {
  opacity: 1;
  -webkit-transform: scale(1) translate(0, 0);
  -moz-transform: scale(1) translate(0, 0);
  -ms-transform: scale(1) translate(0, 0);
  -o-transform: scale(1) translate(0, 0);
  transform: scale(1) translate(0, 0);
  
  z-index: 2;
}




/* calculate autoplay */
@-webkit-keyframes kenbernsBR {
  0%, 100% { -webkit-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -webkit-transform: scale(1.3) translate(11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-moz-keyframes kenbernsBR {
  0%, 100% { -moz-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -moz-transform: scale(1.3) translate(11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-ms-keyframes kenbernsBR {
  0%, 100% { -ms-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -ms-transform: scale(1.3) translate(11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-o-keyframes kenbernsBR {
  0%, 100% { -o-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -o-transform: scale(1.3) translate(11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@keyframes kenbernsBR {
  0%, 100% { transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { transform: scale(1.3) translate(11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-webkit-keyframes kenbernsBL {
  0%, 100% { -webkit-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -webkit-transform: scale(1.3) translate(11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-moz-keyframes kenbernsBL {
  0%, 100% { -moz-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -moz-transform: scale(1.3) translate(11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-ms-keyframes kenbernsBL {
  0%, 100% { -ms-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -ms-transform: scale(1.3) translate(11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-o-keyframes kenbernsBL {
  0%, 100% { -o-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -o-transform: scale(1.3) translate(11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@keyframes kenbernsBL {
  0%, 100% { transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { transform: scale(1.3) translate(11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-webkit-keyframes kenbernsTL {
  0%, 100% { -webkit-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -webkit-transform: scale(1.3) translate(-11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-moz-keyframes kenbernsTL {
  0%, 100% { -moz-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -moz-transform: scale(1.3) translate(-11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-ms-keyframes kenbernsTL {
  0%, 100% { -ms-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -ms-transform: scale(1.3) translate(-11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-o-keyframes kenbernsTL {
  0%, 100% { -o-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -o-transform: scale(1.3) translate(-11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@keyframes kenbernsTL {
  0%, 100% { transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { transform: scale(1.3) translate(-11.53846%, -11.53846%); opacity: 0; z-index: 2; }
}
@-webkit-keyframes kenbernsTR {
  0%, 100% { -webkit-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -webkit-transform: scale(1.3) translate(-11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-moz-keyframes kenbernsTR {
  0%, 100% { -moz-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -moz-transform: scale(1.3) translate(-11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-ms-keyframes kenbernsTR {
  0%, 100% { -ms-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -ms-transform: scale(1.3) translate(-11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@-o-keyframes kenbernsTR {
  0%, 100% { -o-transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { -o-transform: scale(1.3) translate(-11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}
@keyframes kenbernsTR {
  0%, 100% { transform: scale(1); opacity: 0 }
  8.333333333333334%, 33.333333333333336% { opacity: 1 }
  41.66666666666667%, 66.66666666666666% { transform: scale(1.3) translate(-11.53846%, 11.53846%); opacity: 0; z-index: 2; }
}



.csslider1 > #cs_play1:checked ~ ul > li.num0,
.csslider1 > #cs_pause1:checked ~ ul > li.num0 {
  -webkit-animation: kenbernsTR 24000ms infinite -2000ms linear;
  -moz-animation: kenbernsTR 24000ms infinite -2000ms linear;
  -ms-animation: kenbernsTR 24000ms infinite -2000ms linear;
  -o-animation: kenbernsTR 24000ms infinite -2000ms linear;
  animation: kenbernsTR 24000ms infinite -2000ms linear;
  
}
.csslider1 > #cs_play1:checked ~ ul > li.num1,
.csslider1 > #cs_pause1:checked ~ ul > li.num1 {
  -webkit-animation: kenbernsBR 24000ms infinite 6000ms linear;
  -moz-animation: kenbernsBR 24000ms infinite 6000ms linear;
  -ms-animation: kenbernsBR 24000ms infinite 6000ms linear;
  -o-animation: kenbernsBR 24000ms infinite 6000ms linear;
  animation: kenbernsBR 24000ms infinite 6000ms linear;
  
}
.csslider1 > #cs_play1:checked ~ ul > li.num2,
.csslider1 > #cs_pause1:checked ~ ul > li.num2 {
  -webkit-animation: kenbernsTL 24000ms infinite 14000ms linear;
  -moz-animation: kenbernsTL 24000ms infinite 14000ms linear;
  -ms-animation: kenbernsTL 24000ms infinite 14000ms linear;
  -o-animation: kenbernsTL 24000ms infinite 14000ms linear;
  animation: kenbernsTL 24000ms infinite 14000ms linear;
  
}




.csslider1 > #cs_play1:checked ~ ul > li,
.csslider1 > #cs_pause1:checked ~ ul > li {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
  
}



.csslider1.cs_pauseHover:hover > ul > li,
.csslider1 > #cs_pause1:checked ~ ul > li{
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -ms-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}

/* stop */

.csslider1 > .slide:checked ~ ul > li {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  -o-animation: none;
  animation: none;
}

/* /calculate autoplay */
.csslider1 {
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  -ms-perspective: 500px;
  -o-perspective: 500px;
  perspective: 500px;
  
}
.csslider1 > .cs_play_pause {
    -webkit-transition: .5s opacity 0s ease;
    -moz-transition: .5s opacity 0s ease;
    -ms-transition: .5s opacity 0s ease;
    -o-transition: .5s opacity 0s ease;
    transition: .5s opacity 0s ease;
    
}
.csslider1 > .cs_arrowprev {
    -webkit-transition: .5s opacity .15s ease, .5s -webkit-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: .5s opacity .15s ease, .5s -moz-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: .5s opacity .15s ease, .5s -ms-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: .5s opacity .15s ease, .5s -o-transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: .5s opacity .15s ease, .5s transform .15s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    
  -webkit-transform: rotateY(-90deg);
  -moz-transform: rotateY(-90deg);
  -ms-transform: rotateY(-90deg);
  -o-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  
}
.csslider1 > .cs_arrownext {
    -webkit-transition: .5s opacity .3s ease, .5s -webkit-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: .5s opacity .3s ease, .5s -moz-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: .5s opacity .3s ease, .5s -ms-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: .5s opacity .3s ease, .5s -o-transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: .5s opacity .3s ease, .5s transform .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    
  -webkit-transform: rotateY(90deg);
  -moz-transform: rotateY(90deg);
  -ms-transform: rotateY(90deg);
  -o-transform: rotateY(90deg);
  transform: rotateY(90deg);
  
}
.csslider1 > .cs_arrowprev,
.csslider1 > .cs_arrownext,
.csslider1 > .cs_play_pause {
  opacity: 0;
}
.csslider1:hover > .cs_arrowprev,
.csslider1:hover > .cs_arrownext,
.csslider1:hover > .cs_play_pause {
  opacity: 1;
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
  
}.csslider1 > .cs_arrowprev > label,
.csslider1 > .cs_arrownext > label {
  overflow: hidden;
  margin-top: -35px;
  width: 40px;
  height: 70px;

  /* Fallback for web browsers that doesn't support RGBa */
  background: #000;
  background-color: rgba(0,0,0,0.6);

  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.csslider1 > .cs_arrowprev {
  left: 70px;
}
.csslider1 > .cs_arrownext {
  right: 70px;
}
.csslider1 > .cs_arrowprev > label {
  right: 0;
}
.csslider1 > .cs_arrownext > label {
  left: 0;
}
.csslider1 > .cs_arrowprev > label:after {
  content: '\e800';
}
.csslider1 > .cs_arrownext > label:after {
  content: '\e801';
}
.csslider1 > .cs_arrowprev > label:after,
.csslider1 > .cs_arrownext > label:after {
  display: block;
  font: 40px "demurecontrols";
  text-align: center;
  line-height: 76px;
  color: #fff;
}




.csslider1 > .cs_arrowprev > label,
.csslider1 > .cs_arrownext > label {
  -webkit-transition: 300ms width ease, 300ms margin-left ease, 300ms background-color ease;
  -moz-transition: 300ms width ease, 300ms margin-left ease, 300ms background-color ease;
  -ms-transition: 300ms width ease, 300ms margin-left ease, 300ms background-color ease;
  -o-transition: 300ms width ease, 300ms margin-left ease, 300ms background-color ease;
  transition: 300ms width ease, 300ms margin-left ease, 300ms background-color ease;
  
}
.csslider1 > .cs_arrowprev:hover > label {
  background-color: #E34B64;
  width: 70px;
}
.csslider1 > .cs_arrownext:hover > label {
  background-color: #E34B64;
  width: 70px;
}.csslider1 > .cs_bullets {
  bottom: 5px;
  margin-bottom: 5px;
}

.csslider1 > .cs_bullets > label {
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  -ms-perspective: 500px;
  -o-perspective: 500px;
  perspective: 500px;
  
}

.csslider1 > .cs_bullets > label > .cs_thumb {
  border: 3px solid #E34B64;
  margin-top: -11px;
  -webkit-transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -webkit-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), visibility 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  -moz-transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -moz-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), visibility 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  -ms-transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -ms-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), visibility 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  -o-transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), -o-transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), visibility 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), visibility 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  
  -webkit-transform-origin: 0% 100% 0px;
  -moz-transform-origin: 0% 100% 0px;
  -ms-transform-origin: 0% 100% 0px;
  -o-transform-origin: 0% 100% 0px;
  transform-origin: 0% 100% 0px;
  
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  -ms-transform: rotateX(90deg);
  -o-transform: rotateX(90deg);
  transform: rotateX(90deg);
  
}
.csslider1 > .cs_bullets > label > .cs_thumb:before {
  content: '';
  position: absolute;
  width: 0; 
  height: 0; 
  left: 50%;
  margin-left: -1px;
  bottom: -8px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  
  border-top: 7px solid #E34B64;
}
.csslider1 > .cs_bullets > label:hover > .cs_thumb {
  visibility: visible;
  opacity: 1;
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
  
}


.csslider1 > .cs_bullets > label {
  margin: 0 6px;
  padding: 9px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  
  /* Fallback for web browsers that doesn't support RGBa */
  background: #000;
  background-color: rgba(0,0,0,0.6);
}

.csslider1 > .cs_bullets > label.num0 {
  background-color: #E34B64;
}
.csslider1 > .slide:checked ~ .cs_bullets > label {
  /* Fallback for web browsers that doesn't support RGBa */
  background: #000;
  background-color: rgba(0,0,0,0.6);
}

.csslider1 > #cs_slide1_0:checked ~ .cs_bullets > label.num0,
.csslider1 > #cs_slide1_1:checked ~ .cs_bullets > label.num1,
.csslider1 > #cs_slide1_2:checked ~ .cs_bullets > label.num2 {
  background-color: #E34B64;
}

.csslider1 > .cs_bullets > label:hover {
  background-color: #E34B64;
}

/* calculate autoplay */
@-webkit-keyframes bullet {
  0%, 33.32333333333334%  { background-color: #E34B64; }
  33.333333333333336%, 100% { background: #000; background-color: rgba(0,0,0,0.6); }
}
@-moz-keyframes bullet {
  0%, 33.32333333333334%  { background-color: #E34B64; }
  33.333333333333336%, 100% { background: #000; background-color: rgba(0,0,0,0.6); }
}
@-ms-keyframes bullet {
  0%, 33.32333333333334%  { background-color: #E34B64; }
  33.333333333333336%, 100% { background: #000; background-color: rgba(0,0,0,0.6); }
}
@-o-keyframes bullet {
  0%, 33.32333333333334%  { background-color: #E34B64; }
  33.333333333333336%, 100% { background: #000; background-color: rgba(0,0,0,0.6); }
}
@keyframes bullet {
  0%, 33.32333333333334%  { background-color: #E34B64; }
  33.333333333333336%, 100% { background: #000; background-color: rgba(0,0,0,0.6); }
}


.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num0,
.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num0 {
  -webkit-animation: bullet 24000ms infinite -2000ms;
  -moz-animation: bullet 24000ms infinite -2000ms;
  -ms-animation: bullet 24000ms infinite -2000ms;
  -o-animation: bullet 24000ms infinite -2000ms;
  animation: bullet 24000ms infinite -2000ms;
  
}
.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num1,
.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num1 {
  -webkit-animation: bullet 24000ms infinite 6000ms;
  -moz-animation: bullet 24000ms infinite 6000ms;
  -ms-animation: bullet 24000ms infinite 6000ms;
  -o-animation: bullet 24000ms infinite 6000ms;
  animation: bullet 24000ms infinite 6000ms;
  
}
.csslider1 > #cs_play1:checked ~ .cs_bullets > label.num2,
.csslider1 > #cs_pause1:checked ~ .cs_bullets > label.num2 {
  -webkit-animation: bullet 24000ms infinite 14000ms;
  -moz-animation: bullet 24000ms infinite 14000ms;
  -ms-animation: bullet 24000ms infinite 14000ms;
  -o-animation: bullet 24000ms infinite 14000ms;
  animation: bullet 24000ms infinite 14000ms;
  
}




.csslider1 > #cs_play1:checked ~ .cs_bullets > label,
.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
    
}

.csslider1.cs_pauseHover:hover > .cs_bullets > label,
.csslider1 > #cs_pause1:checked ~ .cs_bullets > label {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -ms-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}

/* stop */

.csslider1 > .slide:checked ~ .cs_bullets > label {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  -o-animation: none;
  animation: none;
}

/* /calculate autoplay */


.csslider1 > .cs_description > label {
  font: 20px 'Roboto', sans-serif;
  line-height: normal;
  bottom: 35px;
  left: 20px;
  top: auto;
  opacity: 1;
  z-index: 1;

  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  -ms-perspective: 500px;
  -o-perspective: 500px;
  perspective: 500px;
  
}
.csslider1 > .cs_description > label > span {
  margin: 1px 10px;
  padding: 10px;
  color: #fff;

  overflow: hidden;

  -webkit-transform-origin: 0% 0% 0px;
  -moz-transform-origin: 0% 0% 0px;
  -ms-transform-origin: 0% 0% 0px;
  -o-transform-origin: 0% 0% 0px;
  transform-origin: 0% 0% 0px;
  
  
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}


.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0,
.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1,
.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 {
  z-index: 2;
}



.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_descr,
.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_descr,
.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_descr {
  opacity: 1;
  visibility: visible;
    -webkit-transition: 750ms opacity 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: 750ms opacity 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: 750ms opacity 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: 750ms opacity 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: 750ms opacity 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1350ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
  
}


.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 > .cs_title,
.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 > .cs_title,
.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 > .cs_title {
  opacity: 1;
  visibility: visible;
    -webkit-transition: 750ms opacity 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1200ms ease;
    -moz-transition: 750ms opacity 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1200ms ease;
    -ms-transition: 750ms opacity 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1200ms ease;
    -o-transition: 750ms opacity 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1200ms ease;
    transition: 750ms opacity 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 1200ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 1200ms ease;
    
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
  
}


.csslider1 > #cs_slide1_0:checked ~ .cs_description > .num0 .cs_wrapper,
.csslider1 > #cs_slide1_1:checked ~ .cs_description > .num1 .cs_wrapper,
.csslider1 > #cs_slide1_2:checked ~ .cs_description > .num2 .cs_wrapper {
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
  
}

.csslider1 > .cs_description > label > .cs_title {
  margin: 0px 10px;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  /* Fallback for web browsers that doesn't support RGBa */
  background: #000;
  background-color: rgba(0,0,0,0.6);
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  -ms-transform: rotateX(90deg);
  -o-transform: rotateX(90deg);
  transform: rotateX(90deg);
  
    -webkit-transition: 750ms opacity 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 975ms ease;
    -moz-transition: 750ms opacity 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 975ms ease;
    -ms-transition: 750ms opacity 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 975ms ease;
    -o-transition: 750ms opacity 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 975ms ease;
    transition: 750ms opacity 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 975ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 975ms ease;
    
}
.csslider1 > .cs_description > label > .cs_descr {
  font-size: 0.8em;
  margin: 1px 10px;
  opacity: 0;
  visibility: hidden;
  z-index: 1;

  background-color: #E34B64;

  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  -ms-transform: rotateX(-90deg);
  -o-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  
    -webkit-transition: 750ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: 750ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: 750ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: 750ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: 750ms opacity 750ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms visibility 600ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    
}


.csslider1 > .cs_description > label > .cs_title > .cs_wrapper {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
  
  -webkit-transition: 750ms opacity 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -moz-transition: 750ms opacity 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -ms-transition: 750ms opacity 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -o-transition: 750ms opacity 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  transition: 750ms opacity 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 1450ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  
}
.csslider1 > .cs_description > label > .cs_descr > .cs_wrapper {
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
  
  -webkit-transition: 750ms opacity 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -webkit-transform 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -moz-transition: 750ms opacity 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -moz-transform 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -ms-transition: 750ms opacity 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -ms-transform 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  -o-transition: 750ms opacity 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms -o-transform 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  transition: 750ms opacity 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550), 750ms transform 1675ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  
}


/* calculate autoplay */
@-webkit-keyframes cs_descrWrapper {
  1.53125%, 35.520833333333336% { z-index: 2; }
  35.530833333333334%, 100% { z-index: 0; }
}
@-moz-keyframes cs_descrWrapper {
  1.53125%, 35.520833333333336% { z-index: 2; }
  35.530833333333334%, 100% { z-index: 0; }
}
@-ms-keyframes cs_descrWrapper {
  1.53125%, 35.520833333333336% { z-index: 2; }
  35.530833333333334%, 100% { z-index: 0; }
}
@-o-keyframes cs_descrWrapper {
  1.53125%, 35.520833333333336% { z-index: 2; }
  35.530833333333334%, 100% { z-index: 0; }
}
@keyframes cs_descrWrapper {
  1.53125%, 35.520833333333336% { z-index: 2; }
  35.530833333333334%, 100% { z-index: 0; }
}



.csslider1 > #cs_play1:checked ~ .cs_description > .num0 {
  -webkit-animation: cs_descrWrapper 24000ms infinite -1400ms ease;
  -moz-animation: cs_descrWrapper 24000ms infinite -1400ms ease;
  -ms-animation: cs_descrWrapper 24000ms infinite -1400ms ease;
  -o-animation: cs_descrWrapper 24000ms infinite -1400ms ease;
  animation: cs_descrWrapper 24000ms infinite -1400ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num1 {
  -webkit-animation: cs_descrWrapper 24000ms infinite 6600ms ease;
  -moz-animation: cs_descrWrapper 24000ms infinite 6600ms ease;
  -ms-animation: cs_descrWrapper 24000ms infinite 6600ms ease;
  -o-animation: cs_descrWrapper 24000ms infinite 6600ms ease;
  animation: cs_descrWrapper 24000ms infinite 6600ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num2 {
  -webkit-animation: cs_descrWrapper 24000ms infinite 14600ms ease;
  -moz-animation: cs_descrWrapper 24000ms infinite 14600ms ease;
  -ms-animation: cs_descrWrapper 24000ms infinite 14600ms ease;
  -o-animation: cs_descrWrapper 24000ms infinite 14600ms ease;
  animation: cs_descrWrapper 24000ms infinite 14600ms ease;
}



@-webkit-keyframes cs_title {
  1.53125%, 31.792083333333334% { opacity: 1; -webkit-transform: rotateX(-9deg); z-index: 2; visibility: visible;}
  2.1875%, 31.135833333333334%  { opacity: 1; -webkit-transform: rotateX(0deg); z-index: 2; visibility: visible;}
  33.333333333333336% { opacity: 0; -webkit-transform: rotateX(90deg); z-index: 2; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-moz-keyframes cs_title {
  1.53125%, 31.792083333333334% { opacity: 1; -moz-transform: rotateX(-9deg); z-index: 2; visibility: visible;}
  2.1875%, 31.135833333333334%  { opacity: 1; -moz-transform: rotateX(0deg); z-index: 2; visibility: visible;}
  33.333333333333336% { opacity: 0; -moz-transform: rotateX(90deg); z-index: 2; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-ms-keyframes cs_title {
  1.53125%, 31.792083333333334% { opacity: 1; -ms-transform: rotateX(-9deg); z-index: 2; visibility: visible;}
  2.1875%, 31.135833333333334%  { opacity: 1; -ms-transform: rotateX(0deg); z-index: 2; visibility: visible;}
  33.333333333333336% { opacity: 0; -ms-transform: rotateX(90deg); z-index: 2; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-o-keyframes cs_title {
  1.53125%, 31.792083333333334% { opacity: 1; -o-transform: rotateX(-9deg); z-index: 2; visibility: visible;}
  2.1875%, 31.135833333333334%  { opacity: 1; -o-transform: rotateX(0deg); z-index: 2; visibility: visible;}
  33.333333333333336% { opacity: 0; -o-transform: rotateX(90deg); z-index: 2; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@keyframes cs_title {
  1.53125%, 31.792083333333334% { opacity: 1; transform: rotateX(-9deg); z-index: 2; visibility: visible;}
  2.1875%, 31.135833333333334%  { opacity: 1; transform: rotateX(0deg); z-index: 2; visibility: visible;}
  33.333333333333336% { opacity: 0; transform: rotateX(90deg); z-index: 2; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}



@-webkit-keyframes cs_descr {
  3.0625%, 29.604583333333334%  { opacity: 1; -webkit-transform: rotateX(9deg); z-index: 1; visibility: visible;}
  4.375%, 28.948333333333334% { opacity: 1; -webkit-transform: rotateX(0deg); z-index: 1; visibility: visible;}
  33.333333333333336% { opacity: 0; -webkit-transform: rotateX(-90deg); z-index: 1; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-moz-keyframes cs_descr {
  3.0625%, 29.604583333333334%  { opacity: 1; -moz-transform: rotateX(9deg); z-index: 1; visibility: visible;}
  4.375%, 28.948333333333334% { opacity: 1; -moz-transform: rotateX(0deg); z-index: 1; visibility: visible;}
  33.333333333333336% { opacity: 0; -moz-transform: rotateX(-90deg); z-index: 1; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-ms-keyframes cs_descr {
  3.0625%, 29.604583333333334%  { opacity: 1; -ms-transform: rotateX(9deg); z-index: 1; visibility: visible;}
  4.375%, 28.948333333333334% { opacity: 1; -ms-transform: rotateX(0deg); z-index: 1; visibility: visible;}
  33.333333333333336% { opacity: 0; -ms-transform: rotateX(-90deg); z-index: 1; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@-o-keyframes cs_descr {
  3.0625%, 29.604583333333334%  { opacity: 1; -o-transform: rotateX(9deg); z-index: 1; visibility: visible;}
  4.375%, 28.948333333333334% { opacity: 1; -o-transform: rotateX(0deg); z-index: 1; visibility: visible;}
  33.333333333333336% { opacity: 0; -o-transform: rotateX(-90deg); z-index: 1; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}
@keyframes cs_descr {
  3.0625%, 29.604583333333334%  { opacity: 1; transform: rotateX(9deg); z-index: 1; visibility: visible;}
  4.375%, 28.948333333333334% { opacity: 1; transform: rotateX(0deg); z-index: 1; visibility: visible;}
  33.333333333333336% { opacity: 0; transform: rotateX(-90deg); z-index: 1; visibility: hidden;}
  33.343333333333334%, 100% { z-index: 0; }
}



.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_title,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_title {
  -webkit-animation: cs_title 24000ms infinite -1400ms ease;
  -moz-animation: cs_title 24000ms infinite -1400ms ease;
  -ms-animation: cs_title 24000ms infinite -1400ms ease;
  -o-animation: cs_title 24000ms infinite -1400ms ease;
  animation: cs_title 24000ms infinite -1400ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_title,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_title {
  -webkit-animation: cs_title 24000ms infinite 6600ms ease;
  -moz-animation: cs_title 24000ms infinite 6600ms ease;
  -ms-animation: cs_title 24000ms infinite 6600ms ease;
  -o-animation: cs_title 24000ms infinite 6600ms ease;
  animation: cs_title 24000ms infinite 6600ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_title,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_title {
  -webkit-animation: cs_title 24000ms infinite 14600ms ease;
  -moz-animation: cs_title 24000ms infinite 14600ms ease;
  -ms-animation: cs_title 24000ms infinite 14600ms ease;
  -o-animation: cs_title 24000ms infinite 14600ms ease;
  animation: cs_title 24000ms infinite 14600ms ease;
}


.csslider1 > #cs_play1:checked ~ .cs_description > .num0  > .cs_descr,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num0  > .cs_descr {
  -webkit-animation: cs_descr 24000ms infinite -1400ms ease;
  -moz-animation: cs_descr 24000ms infinite -1400ms ease;
  -ms-animation: cs_descr 24000ms infinite -1400ms ease;
  -o-animation: cs_descr 24000ms infinite -1400ms ease;
  animation: cs_descr 24000ms infinite -1400ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num1  > .cs_descr,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num1  > .cs_descr {
  -webkit-animation: cs_descr 24000ms infinite 6600ms ease;
  -moz-animation: cs_descr 24000ms infinite 6600ms ease;
  -ms-animation: cs_descr 24000ms infinite 6600ms ease;
  -o-animation: cs_descr 24000ms infinite 6600ms ease;
  animation: cs_descr 24000ms infinite 6600ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num2  > .cs_descr,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num2  > .cs_descr {
  -webkit-animation: cs_descr 24000ms infinite 14600ms ease;
  -moz-animation: cs_descr 24000ms infinite 14600ms ease;
  -ms-animation: cs_descr 24000ms infinite 14600ms ease;
  -o-animation: cs_descr 24000ms infinite 14600ms ease;
  animation: cs_descr 24000ms infinite 14600ms ease;
}



@-webkit-keyframes cs_title_text {
  1.53125%, 31.792083333333334% { opacity: 1; -webkit-transform: translateX(-1%); }
  2.1875%, 31.135833333333334%  { opacity: 1; -webkit-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -webkit-transform: translateX(100%); }
}
@-moz-keyframes cs_title_text {
  1.53125%, 31.792083333333334% { opacity: 1; -moz-transform: translateX(-1%); }
  2.1875%, 31.135833333333334%  { opacity: 1; -moz-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -moz-transform: translateX(100%); }
}
@-ms-keyframes cs_title_text {
  1.53125%, 31.792083333333334% { opacity: 1; -ms-transform: translateX(-1%); }
  2.1875%, 31.135833333333334%  { opacity: 1; -ms-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -ms-transform: translateX(100%); }
}
@-o-keyframes cs_title_text {
  1.53125%, 31.792083333333334% { opacity: 1; -o-transform: translateX(-1%); }
  2.1875%, 31.135833333333334%  { opacity: 1; -o-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -o-transform: translateX(100%); }
}
@keyframes cs_title_text {
  1.53125%, 31.792083333333334% { opacity: 1; transform: translateX(-1%); }
  2.1875%, 31.135833333333334%  { opacity: 1; transform: translateX(0%); }
  33.333333333333336% { opacity: 0; transform: translateX(100%); }
}


@-webkit-keyframes cs_descr_text {
  3.0625%, 29.604583333333334%  { opacity: 1; -webkit-transform: translateX(1%); }
  4.375%, 28.948333333333334% { opacity: 1; -webkit-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -webkit-transform: translateX(-100%); }
}
@-moz-keyframes cs_descr_text {
  3.0625%, 29.604583333333334%  { opacity: 1; -moz-transform: translateX(1%); }
  4.375%, 28.948333333333334% { opacity: 1; -moz-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -moz-transform: translateX(-100%); }
}
@-ms-keyframes cs_descr_text {
  3.0625%, 29.604583333333334%  { opacity: 1; -ms-transform: translateX(1%); }
  4.375%, 28.948333333333334% { opacity: 1; -ms-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -ms-transform: translateX(-100%); }
}
@-o-keyframes cs_descr_text {
  3.0625%, 29.604583333333334%  { opacity: 1; -o-transform: translateX(1%); }
  4.375%, 28.948333333333334% { opacity: 1; -o-transform: translateX(0%); }
  33.333333333333336% { opacity: 0; -o-transform: translateX(-100%); }
}
@keyframes cs_descr_text {
  3.0625%, 29.604583333333334%  { opacity: 1; transform: translateX(1%); }
  4.375%, 28.948333333333334% { opacity: 1; transform: translateX(0%); }
  33.333333333333336% { opacity: 0; transform: translateX(-100%); }
}



.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_title > .cs_wrapper {
  -webkit-animation: cs_title_text 24000ms infinite -1190ms ease;
  -moz-animation: cs_title_text 24000ms infinite -1190ms ease;
  -ms-animation: cs_title_text 24000ms infinite -1190ms ease;
  -o-animation: cs_title_text 24000ms infinite -1190ms ease;
  animation: cs_title_text 24000ms infinite -1190ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_title > .cs_wrapper {
  -webkit-animation: cs_title_text 24000ms infinite 6810ms ease;
  -moz-animation: cs_title_text 24000ms infinite 6810ms ease;
  -ms-animation: cs_title_text 24000ms infinite 6810ms ease;
  -o-animation: cs_title_text 24000ms infinite 6810ms ease;
  animation: cs_title_text 24000ms infinite 6810ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_title > .cs_wrapper {
  -webkit-animation: cs_title_text 24000ms infinite 14810ms ease;
  -moz-animation: cs_title_text 24000ms infinite 14810ms ease;
  -ms-animation: cs_title_text 24000ms infinite 14810ms ease;
  -o-animation: cs_title_text 24000ms infinite 14810ms ease;
  animation: cs_title_text 24000ms infinite 14810ms ease;
}


.csslider1 > #cs_play1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num0 .cs_descr > .cs_wrapper {
  -webkit-animation: cs_descr_text 24000ms infinite -1190ms ease;
  -moz-animation: cs_descr_text 24000ms infinite -1190ms ease;
  -ms-animation: cs_descr_text 24000ms infinite -1190ms ease;
  -o-animation: cs_descr_text 24000ms infinite -1190ms ease;
  animation: cs_descr_text 24000ms infinite -1190ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num1 .cs_descr > .cs_wrapper {
  -webkit-animation: cs_descr_text 24000ms infinite 6810ms ease;
  -moz-animation: cs_descr_text 24000ms infinite 6810ms ease;
  -ms-animation: cs_descr_text 24000ms infinite 6810ms ease;
  -o-animation: cs_descr_text 24000ms infinite 6810ms ease;
  animation: cs_descr_text 24000ms infinite 6810ms ease;
}
.csslider1 > #cs_play1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > .num2 .cs_descr > .cs_wrapper {
  -webkit-animation: cs_descr_text 24000ms infinite 14810ms ease;
  -moz-animation: cs_descr_text 24000ms infinite 14810ms ease;
  -ms-animation: cs_descr_text 24000ms infinite 14810ms ease;
  -o-animation: cs_descr_text 24000ms infinite 14810ms ease;
  animation: cs_descr_text 24000ms infinite 14810ms ease;
}




.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title,
.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr,
.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,
.csslider1 > #cs_play1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
    
}

.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title,
.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr,
.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_title > .cs_wrapper,
.csslider1.cs_pauseHover:hover > .cs_description > label > .cs_descr > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_title > .cs_wrapper,
.csslider1 > #cs_pause1:checked ~ .cs_description > label > .cs_descr > .cs_wrapper {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -ms-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}

/* stop */
.csslider1 > .slide:checked ~ .cs_description > label {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  -o-animation: none;
  animation: none;
}


@media
only screen and (max-width: 480px),
only screen and (-webkit-max-device-pixel-ratio: 2)      and (max-width: 480px),
only screen and (   max--moz-device-pixel-ratio: 2)      and (max-width: 480px),
only screen and (     -o-max-device-pixel-ratio: 2/1)    and (max-width: 480px),
only screen and (        max-device-pixel-ratio: 2)      and (max-width: 480px),
only screen and (                max-resolution: 192dpi) and (max-width: 480px),
only screen and (                max-resolution: 2dppx)  and (max-width: 480px) { 
  .csslider1 > .cs_description,
  .csslider1 > .cs_bullets {
    display: none;
  }
}
