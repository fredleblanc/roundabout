/**
 * jQuery Roundabout Shapes v2
 * http://fredhq.com/projects/roundabout-shapes/
 * 
 * Provides additional paths along which items can move for the
 * jQuery Roundabout plugin (v2.0+).
 *
 * Terms of Use // jQuery Roundabout Shapes
 *
 * Open source under the BSD license
 *
 * Copyright (c) 2009-2011, Fred LeBlanc
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above 
 *     copyright notice, this list of conditions and the following 
 *     disclaimer in the documentation and/or other materials provided 
 *     with the distribution.
 *   - Neither the name of the author nor the names of its contributors 
 *     may be used to endorse or promote products derived from this 
 *     software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */
jQuery.extend(jQuery.roundaboutShapes,{theJuggler:function(a,b,c){return{x:Math.sin(a+b),y:Math.tan(Math.exp(Math.log(a))+b)/(c-1),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},figure8:function(a,b,c){return{x:Math.sin(a*2+b),y:Math.sin(a+Math.PI/2+b)/8*c,z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},waterWheel:function(a,b,c){return{x:Math.sin(a+Math.PI/2+b)/8*c,y:Math.sin(a+b)/(Math.PI/2),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},square:function(a,b,c){var d,e,f;if(a<=Math.PI/2){d=2/Math.PI*a;e=-(2/Math.PI)*a+1;f=-(1/Math.PI)*a+1}else if(a>Math.PI/2&&a<=Math.PI){d=-(2/Math.PI)*a+2;e=-(2/Math.PI)*a+1;f=-(1/Math.PI)*a+1}else if(a>Math.PI&&a<=3*Math.PI/2){d=-(2/Math.PI)*a+2;e=2/Math.PI*a-3;f=1/Math.PI*a-1}else{d=2/Math.PI*a-4;e=2/Math.PI*a-3;f=1/Math.PI*a-1}return{x:d,y:e*c,z:f,scale:f}},conveyorBeltLeft:function(a,b,c){return{x:-Math.cos(a+b),y:Math.cos(a+3*Math.PI/2+b)/8*c,z:(Math.sin(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},conveyorBeltRight:function(a,b,c){return{x:Math.cos(a+b),y:Math.cos(a+3*Math.PI/2+b)/8*c,z:(Math.sin(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},goodbyeCruelWorld:function(a,b,c){return{x:Math.sin(a+b),y:Math.tan(a+3*Math.PI/2+b)/8*(c+.5),z:(Math.sin(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},diagonalRingLeft:function(a,b,c){return{x:Math.sin(a+b),y:-Math.cos(a+Math.tan(Math.cos(b)))/(c+1.5),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},diagonalRingRight:function(a,b,c){return{x:Math.sin(a+b),y:Math.cos(a+Math.tan(Math.cos(b)))/(c+1.5),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},rollerCoaster:function(a,b,c){return{x:Math.sin(a+b),y:Math.sin((2+c)*a),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},tearDrop:function(a,b,c){return{x:Math.sin(a+b),y:-Math.sin(a/2+c)+.35,z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},tickingClock:function(a,b,c){return{x:Math.cos(a+b-Math.PI/2),y:Math.sin(a+b-Math.PI/2),z:Math.cos(a),scale:Math.cos(a)+.5}},flurry:function(a,b,c){return{x:Math.sin(a*3+b),y:Math.cos(a+Math.PI/2+b)/2*c,z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},nowSlide:function(a,b,c){return{x:Math.tan(a*2+b)*.5,y:Math.cos(a*2+c)/6,z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}},risingEssence:function(a,b,c){return{x:Math.sin(a+b),y:Math.tan((2+c)*a),z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}}})