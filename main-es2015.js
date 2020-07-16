(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <title>Document</title>\n</head>\n<body>\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" id=\"navbrand\" href=\"#\">Flipkart</a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n              <li><a [routerLink]=\"['/home']\">Dashboard</a></li>\n              <li><a [routerLink]=\"['/shop']\">Sale</a></li>\n              <li><a [routerLink]=\"['/plist']\">Product List</a></li>\n              <li><a [routerLink]=\"['/dbrd']\">Test Acorn Tech</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n              <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <!-- g c -->\n      <router-outlet></router-outlet> \n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Cart</h3>\n\n<!-- <div class=\"cart-item\" *ngFor=\"let item of items\">\n    <span><img src=\"{{item.image}}\" height=\"20\" width=\"20\" class=\"prod_img\"></span>\n  <span>{{ item.name }}</span>\n  <span>{{ item.price | currency }}</span>\n</div>\n -->\n<table class=\"table table-striped\">\n        <thead>\n          <th>No</th>\n          <th>Name</th>\n          <th>Quantity</th>\n          <th>Price per Quantity</th>\n          <!-- <th>Price</th> -->\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of items;let i=index;\">\n            <td>{{i+1}} <input type=\"hidden\" value=\"{{item.id}}\"></td>\n            <td>{{ item.name }}  <img src=\"{{item.image}}\" height=\"20\" width=\"20\" class=\"prod_img\"></td>\n            <td><input type=\"number\" value=\"1\"  name=\"points\" step=\"0\" class=\"form-control qnty\"></td><!-- [(ngModel)]='qty' -->\n            <td>{{item.price}} Rs</td>\n            <!-- <td>{{item.price * 1}} Rs</td> -->\n            <td><button input=\"submit\" (click)=\"clearCart(item.id)\" class=\"fa fa-times delbtn\" aria-hidden=\"true\"></button></td>\n          </tr>\n          </tbody>\n      </table> \n      <div class=\"text-center\"><button class=\"btn btn-success\">Checkout</button></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbrd/dbrd.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dbrd/dbrd.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <div class=\"container-flex\">\n        <div class=\"sidenav\">\n            <a [routerLink]=\"['/dbrdhome']\" class=\"active text-center\" target=\"acorn\"><i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i><br>Home</a>\n            <a href=\"#\"  target=\"acorn\" class=\"text-center notready\"><i class=\"fa fa-laptop fa-2x\" aria-hidden=\"true\"></i><br>Sell</a>\n            <a [routerLink]=\"['/dbsale']\" target=\"acorn\" class=\"text-center\" style=\"white-space: nowrap;\"><i class=\"fa fa-file-text fa-2x\" aria-hidden=\"true\"></i><br>Sales Ledger</a>\n            <a [routerLink]=\"['/home']\" target=\"acorn\" class=\"text-center\"><i class=\"fa fa-area-chart fa-2x\" aria-hidden=\"true\"></i><br>Reporting</a>\n            <a [routerLink]=\"['/plist']\" target=\"acorn\" class=\"text-center\"><i class=\"fa fa-tags fa-2x\" aria-hidden=\"true\"></i><br>Products</a>\n            <a [routerLink]=\"['/shop']\" target=\"acorn\" class=\"text-center\"><i class=\"fa fa-inr fa-2x\" aria-hidden=\"true\"></i><br>Sale Demo</a>\n            <a href=\"#contact\" class=\"text-center notready\"><i class=\"fa fa-cogs fa-2x\" aria-hidden=\"true\"></i><br>Setup</a>\n          </div>          \n    </div>\n    <div class=\"main\">\n    <iframe src=\"\" frameborder=\"0\" name=\"acorn\" style=\"height:100%;width:100%;position:absolute;top:0px;left:40px;right:0px;bottom:0px\" height=\"100%\" width=\"100%\"></iframe>    \n    </div>  \n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbrdhome/dbrdhome.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dbrdhome/dbrdhome.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 dbhome\">\n            <h3 class=\"text-center\"><strong>Start your retail success with Us.</strong></h3>\n            <h6 class=\"text-center\">Get to know the basics in three easy ways.</h6>\n            <br><br>\n            <div class=\"col-md-4\">\n                <div class=\"text-center\">\n                    <i class=\"fa fa-inr fa-2x\" aria-hidden=\"true\"></i>\n                    <h4><strong>Make a Sale</strong></h4>\n                    <h6>Explore the Sell screen, and learn how to make your first sale in seconds.</h6>\n                    <a href=\"\" class=\"btn btn-success\">Make a Sale</a>\n                </div>    \n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"text-center\">\n                    <i class=\"fa fa-shopping-basket fa-2x\" aria-hidden=\"true\"></i>\n                    <h4><strong>Add a Product</strong></h4>\n                    <h6>Manage your products easily, whether you want to add one or import one thousand.</h6>\n                    <a href=\"\" class=\"btn btn-success\">Add a Product</a>\n                </div>    \n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"text-center\">\n                    <i class=\"fa fa-address-card fa-2x\" aria-hidden=\"true\"></i>\n                    <h4><strong>Add a Customer</strong></h4>\n                    <h6>Start a customer base to grow repeat business or simply upload existing customers.</h6>\n                    <a href=\"\" class=\"btn btn-success\">Add a Customer</a>\n                </div>\n                <br><br>    \n            </div>\n            \n            <h3 class=\"text-center\"><strong>Every part of your business, in sync.</strong></h3>\n            <h6 class=\"text-center\">Here are some of the ways to automate the heavy lifting of running your business so you can focus on success.</h6>\n            <div class=\"col-md-6\">\n                <div class=\"dbicon\">\n                    <i class=\"fa fa-desktop fa-3x\" aria-hidden=\"true\"></i>\n                </div>\n                <div>\n                    <h4 class=\"text-center\"><strong>Sell in-store and online.</strong></h4>\n                    <p class=\"dbtext\">Add a new product to your catalogue and sell it anywhere instantly. Manage your in-store and online inventory, customers and sales all in one place.</p>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"dbicon\">\n                    <i class=\"fa fa-desktop fa-3x\" aria-hidden=\"true\"></i>\n                </div>\n                <div>\n                    <h4 class=\"text-center\"><strong>Sell in-store and online.</strong></h4>\n                    <p class=\"dbtext\">Add a new product to your catalogue and sell it anywhere instantly. Manage your in-store and online inventory, customers and sales all in one place.</p>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"dbicon\">\n                    <i class=\"fa fa-desktop fa-3x\" aria-hidden=\"true\"></i>\n                </div>\n                <div>\n                    <h4 class=\"text-center\"><strong>Sell in-store and online.</strong></h4>\n                    <p class=\"dbtext\">Add a new product to your catalogue and sell it anywhere instantly. Manage your in-store and online inventory, customers and sales all in one place.</p>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"dbicon\">\n                    <i class=\"fa fa-desktop fa-3x\" aria-hidden=\"true\"></i>\n                </div>\n                <div>\n                    <h4 class=\"text-center\"><strong>Sell in-store and online.</strong></h4>\n                    <p class=\"dbtext\">Add a new product to your catalogue and sell it anywhere instantly. Manage your in-store and online inventory, customers and sales all in one place.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n          <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"thumbnail total\">\n                    <div class=\"ficon\"><i class=\"fa fa-shopping-bag fa-2x\" aria-hidden=\"true\"></i></div>\n                    <div class=\"category\">Total Products</div>\n                    <div class=\"quantity\">{{total_products}}</div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"thumbnail sold\">\n                    <div class=\"ficon\"><i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"></i></div>\n                    <div class=\"category\">Sold Products</div>\n                    <div class=\"quantity\">{{sold_products}}</div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"thumbnail rev\">\n                    <div class=\"ficon\"><i class=\"fa fa-inr fa-2x\" aria-hidden=\"true\"></i></div>\n                    <div class=\"category\">Revenue</div>\n                    <div class=\"quantity\">{{revenue}}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"product_list\">\n                    <h4 class=\"ptitle\">Product List</h4>\n                    <table class=\"table table-striped table_one\">\n                        <th>Image</th>\n                        <th>Name</th>\n                        <th>Quantity</th>\n                        <th>Available Qty</th>\n                        <th>Price</th>\n                        <th>Date(Reg)</th>\n                        <tr *ngFor=\"let groc of grocery\">\n                            <td><img src=\"{{groc.image}}\" class=\"img-responsive\" height=\"30\" width=\"30\"></td>\n                            <td>{{groc.name}}</td>\n                            <td>{{groc.quantity}}</td>\n                            <td>{{groc.available_qty}}</td>\n                            <td>{{groc.price}} Rs</td>\n                            <td>{{groc.dor}}</td>\n                        </tr>\n                    </table>\n                    <ul class=\"pager\">\n                            <li><a href=\"#\">Previous</a></li>\n                            &nbsp;\n                            <li><a href=\"#\">Next</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"product_list\">\n                        <h5 class=\"ptitle\"><strong>Daily Order ({{currentdate|date}})</strong></h5>\n                        <table class=\"table table-striped table_two\">\n                            <th>Image</th>\n                            <th>Name</th>\n                            <th>Qty</th>\n                            <th>price</th>\n                            <tr *ngFor=\"let ds of daily_sale\">\n                                    <td><img src=\"{{ds.image}}\" class=\"img-responsive\" height=\"30\" width=\"30\"></td>\n                                    <td>{{ds.name}}</td>\n                                    <td>{{ds.quantity}}</td>\n                                    <td>{{ds.price}}</td>\n                            </tr>\n                    </table>\n                        <div class=\"text-center\"><button class=\"btn btn-primary\">View All</button></div>\n                </div>\n            </div>\n        </div>\n        <br><br>\n        <!-- sales report starts here -->\n        <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"product_list\">\n                        <h4 class=\"ptitle\">Product Sale (Monthly)</h4>\n                        \n                        <table class=\"table table-striped table_one\">\n                            <th>Order Id</th>\n                            <th>Date</th>\n                            <th>Quantity</th>\n                            <th>Total Price</th>\n                            <th>Details</th>\n                            <tr *ngFor=\"let mps of monthly_product_sale\">\n                                <td>{{mps.order_id}}</td>\n                                <td>{{mps.date}}</td>\n                                <td>{{mps.quantity}}</td>\n                                <td>{{mps.tot_price}}</td>\n                                <td><button class=\"btn btn-primary order_detail\">View Details</button></td>\n                            </tr>\n                            \n                        </table>\n                    \n                        <ul class=\"pager\">\n                                <li><a href=\"#\">Previous</a></li>\n                                &nbsp;\n                                <li><a href=\"#\">Next</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"product_list\">\n                            <h5 class=\"ptitle\"><strong>Sales Statastics</strong></h5>\n                            <div class=\"text-center\">\n                                    <button class=\"btn btn-danger\">Weekly</button>&nbsp;\n                                    <button class=\"btn btn-success\">Monthly</button>&nbsp;\n                                    <button class=\"btn btn-warning\">Yearly</button>\n                            </div>\n                            <br>\n                            <img src=\"assets/images/download.png\" class=\"img-responsive\">\n                             <div class=\"text-center\"><button class=\"btn btn-primary\">View All</button></div>\n                            \n                    </div>\n                </div>\n            </div>\n            <!-- sales report ends here -->\n      </div>\n      <br><br>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"text-right\"><button class=\"btn btn-danger\" onclick=\"document.getElementById('id01').style.display='block'\">Add Product</button></div>\n            <div>\n                <table class=\"table\">\n                    <thead>\n                        <th>No</th>\n                        <th>Name</th>\n                        <th>Category</th>\n                        <th>Image</th>\n                        <th>Quantity</th>\n                        <th>Price</th>\n                        <th>Description</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of myProducts;let i=index;\">\n                            <td>{{i+1}}</td>\n                            <td>{{data.Value}}</td>\n                            <td>{{data.category}}</td>\n                            <td><img src=\"{{data.image}}\" height=\"20\" width=\"20\"></td>\n                            <td>{{data.quantity}}</td>\n                            <td>{{data.price}}</td>\n                            <td>{{data.description}}</td>\n                            <td><a  class=\"btn fa fa-pencil\" (click)=\"EditItem(i)\" onclick=\"document.getElementById('id01').style.display='block'\"></a> &nbsp; <a class=\"btn fa fa-trash\" (click)=\"DeleteItem(i)\"></a></td>\n                        </tr>\n                    </tbody>\n                    <div *ngIf=\"myProducts.length == 0\" class=\"alert alert-warning\">  No Products found !!!! </div>\n                </table>\n                                \n            </div>\n        </div>\n    </div>\n    <!--add product modal starts here -->\n    <div id=\"id01\" class=\"w3-modal\">\n            <div class=\"w3-modal-content w3-animate-zoom w3-card-4\">\n              <header class=\"w3-container\" id=\"product\"> \n                <span onclick=\"document.getElementById('id01').style.display='none'\" \n                class=\"w3-button w3-display-topright\">close</span>\n                <h4 class=\"text-center\">Add Product</h4>\n              </header>\n              <div class=\"w3-container\">\n                    <div class=\"col-md-10\">\n                            <form action=\"\" name=\"productName\">\n                                <table class=\"table prdtable\">\n                                    <tr >\n                                        <td>Product Name </td><td><input type=\"text\" class=\"form-control\" name=\"Value\" required [(ngModel)]=\"newProduct.Value\"></td>&nbsp;&nbsp;\n                                        <td> Category </td><td><select class=\"form-control\" name=\"category\" required [(ngModel)]=\"newProduct.category\">\n                                            <option value=\"select category\">select category</option>\n                                            <option *ngFor=\"let ctype of catg;\" value=\"{{ctype}}\">{{ctype}}</option>\n                                        </select></td>\n                                    </tr>\n                                    <tr>\n                                            <td>Quantity </td><td><input type=\"text\" class=\"form-control\" name=\"quantity\" required [(ngModel)]=\"newProduct.quantity\"></td>&nbsp;&nbsp;\n                                            <td> Price </td><td><input type=\"text\" class=\"form-control\" name=\"price\" required [(ngModel)]=\"newProduct.price\"></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Description </td><td><textarea name=\"\" id=\"\" cols=\"30\" rows=\"5\" class=\"form-control\" name=\"description\" required [(ngModel)]=\"newProduct.description\"></textarea></td>\n                                    </tr>\n                                    <tr>\n                                            <td>Image </td><td><input type=\"file\"  class=\"form-control\" name=\"image\" required [(ngModel)]=\"newProduct.image\"></td>\n                                    </tr>\n                                </table>\n                                <div class=\"text-center\"><button class=\"btn btn-success\" (click)=\"AddItem()\" [disabled]=\"IsForUpdate == true\" >add product</button> &nbsp; <button type=\"submit\" class=\"btn btn-primary\" (click)=\"UpdatedItem()\" [disabled]=\"IsForUpdate == false\">Update</button></div>\n                            </form>\n                        </div>      \n              </div>\n              <footer class=\"w3-container\" id=\"product\">\n                <h6 class=\"text-center\">www.flipkart.com</h6>\n              </footer>\n            </div>\n          </div>\n          \n    <!--add product modal ends here -->\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"text-right\"><button onclick=\"document.getElementById('id01').style.display='block'\" class=\"cartbtn\"><i class=\"fa fa-shopping-cart fa-2x cartlogo\" aria-hidden=\"true\"></i></button></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\" *ngFor=\"let product of products\" >\n                <div class=\"thumbnail\">\n                    <input type=\"hidden\" value=\"{{product.id}}\">\n                    <img src=\"{{product.image}}\" height=\"100\" width=\"100\" class=\"prod_img\">\n                    <p class=\"text-center\">{{product.name}}</p>\n                    <p class=\"text-center\">{{product.price}} Rs</p>\n                    <p class=\"text-center\">{{product.description}}</p>\n                    <div class=\"text-center\"><button class=\"btn btn-success\" (click)=\"addToCart(product)\" onclick=\"document.getElementById('id01').style.display='block'\">ADD TO CART</button></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- cart modal starts here -->\n    <div id=\"id01\" class=\"w3-modal\">\n            <div class=\"w3-modal-content w3-animate-zoom w3-card-4\">\n              <header class=\"w3-container\" id=\"cart\"> \n                <span onclick=\"document.getElementById('id01').style.display='none'\" \n                class=\"w3-button w3-display-topright\">close</span>\n                <h4 class=\"text-center\">Your shopping cart</h4>\n              </header>\n              <div class=\"w3-container\">\n                  <app-cart></app-cart>\n<!--                 <table class=\"table table-striped\">\n                  <thead>\n                    <th>No</th>\n                    <th>Name</th>\n                    <th>Quantity</th>\n                    <th>Price per Quantity</th>\n                    <th>Price</th>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>1</td>\n                      <td>Moms-Magic Biscuit  <img src=\"assets/images/1.jpg\" height=\"20\" width=\"20\" class=\"prod_img\"></td>\n                      <td><input type=\"number\" value=\"1\"  name=\"points\" step=\"0\" class=\"form-control qnty\"></td>\n                      <td>35 Rs</td>\n                      <td>70 Rs</td>\n                    </tr>\n                    <tr>\n                        <td>1</td>\n                        <td>Moms-Magic Biscuit  <img src=\"assets/images/1.jpg\" height=\"20\" width=\"20\" class=\"prod_img\"></td>\n                        <td><input type=\"number\" value=\"1\"  name=\"points\" step=\"0\" class=\"form-control qnty\"></td>\n                        <td>35 Rs</td>\n                        <td>70 Rs</td>\n                      </tr>\n                      <tr>\n                          <td>1</td>\n                          <td>Moms-Magic Biscuit  <img src=\"assets/images/1.jpg\" height=\"20\" width=\"20\" class=\"prod_img\"></td>\n                          <td><input type=\"number\" value=\"1\"  name=\"points\" step=\"0\" class=\"form-control qnty\"></td>\n                          <td>35 Rs</td>\n                          <td>70 Rs</td>\n                        </tr>\n                        <tr>\n                            <td>1</td>\n                            <td>Moms-Magic Biscuit  <img src=\"assets/images/1.jpg\" height=\"20\" width=\"20\" class=\"prod_img\"></td>\n                            <td><input type=\"number\" value=\"1\"  name=\"points\" step=\"0\" class=\"form-control qnty\"></td>\n                            <td>35 Rs</td>\n                            <td>70 Rs</td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td><strong>Total Amount:</strong></td>\n                            <td>538 Rs</td>\n                          </tr>\n                    </tbody>\n                </table> \n                <div class=\"text-center\"><button class=\"btn btn-success\">Checkout</button></div>\n                -->\n              </div>\n              <footer class=\"w3-container\" id=\"cart\">\n                <h6 class=\"text-center\">www.flipkart.com</h6>\n              </footer>\n            </div>\n          </div>\n          \n    <!-- cart modal ends here -->\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/salesledger/salesledger.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salesledger/salesledger.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <div class=\"container\">\n        <h4><strong>Sales Ledger</strong></h4>\n        <p>Use Sales Ledger to send transactions to your accounting applications. To process a return or continue sales, go to  <a href=\"\" style=\"text-decoration: none;color:blue;\">Sales History.</a> </p>\n        <hr style=\"border:1px dashed;\">\n        <div class=\"text-right\"><a href=\"\" style=\"text-decoration: none;color:blue;\"><strong>Export CSV</strong></a></div>\n        <button type=\"button\" class=\"btn mybtn\" style=\"border:1px solid gray;\" data-toggle=\"collapse\" data-target=\"#demo\">More Filter Option</button>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <form action=\"\">\n                    <table class=\"table\">\n                        <tr>\n                            <td>Date From</td>\n                            <td>Date To</td>\n                            <td>Show</td>\n                        </tr>\n                        <tr>\n                            <td><input type=\"date\" name=\"\" id=\"\"></td>\n                            <td><input type=\"date\" name=\"\" id=\"\"></td>\n                            <td><select name=\"\" id=\"\">\n                                <option value=\"\">All sales</option>\n                                <option value=\"\">Closed</option>\n                            </select></td>\n                            <td><button class=\"btn\">Update</button></td>\n                        </tr>\n                    </table>\n                    \n                </form>\n                <div id=\"demo\" class=\"collapse\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <br><br>\n    </div>\n    <div class=\"container\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered\">\n                <thead class=\"dark\">\n                    <tr>\n                        <th>Date</th>\n                        <th>User</th>\n                        <th>Register</th>\n                        <th>Receipt</th>\n                        <th>Customer</th>\n                        <th>Note</th>\n                        <th>Status</th>\n                        <th>Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>No Sale</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dbrd_dbrd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dbrd/dbrd.component */ "./src/app/dbrd/dbrd.component.ts");
/* harmony import */ var _dbrdhome_dbrdhome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dbrdhome/dbrdhome.component */ "./src/app/dbrdhome/dbrdhome.component.ts");
/* harmony import */ var _salesledger_salesledger_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salesledger/salesledger.component */ "./src/app/salesledger/salesledger.component.ts");









const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'shop', component: _sale_sale_component__WEBPACK_IMPORTED_MODULE_4__["SaleComponent"] },
    { path: 'plist', component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"] },
    { path: 'dbrd', component: _dbrd_dbrd_component__WEBPACK_IMPORTED_MODULE_6__["DbrdComponent"] },
    { path: 'dbrdhome', component: _dbrdhome_dbrdhome_component__WEBPACK_IMPORTED_MODULE_7__["DbrdhomeComponent"] },
    { path: 'dbsale', component: _salesledger_salesledger_component__WEBPACK_IMPORTED_MODULE_8__["SalesledgerComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{background-color:whitesmoke;}\r\n\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .example {background: red;}\r\n  }\r\n\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .example {background: green;}\r\n  }\r\n\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .example {background: blue;}\r\n  }\r\n\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .example {background: orange;}\r\n  }\r\n\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .example {background: pink;}\r\n    .ficon{\r\n        margin-left:40px;\r\n        margin-top:40px;\r\n          }\r\n\r\n      .category{\r\n          margin-left:120px;\r\n          position: relative;\r\n          bottom:20px;\r\n          font-size:16px;\r\n          font-weight:bold;\r\n      }    \r\n      .quantity{\r\n          margin-left:140px;\r\n          margin-bottom:20px;\r\n          font-weight:bold;\r\n      }\r\n\r\n      /* product list section starts here */\r\n            .product_list{\r\n                height:300px;\r\n                border:0;\r\n                box-shadow: 5px 10px 8px 5px lightgray;\r\n            }\r\n            .ptitle{position: relative;top:10px;left:10px;}\r\n            .table_one{margin-left:40px;}\r\n            .table_two{margin-left:20px;}\r\n      /* product list section ends here */\r\n  }\r\n\r\n\r\n/* commen css */\r\n\r\n\r\n.navbar{\r\n      background-color: orangered;  \r\n      border-radius: 0;\r\n      border:none;\r\n    }\r\n\r\n\r\n.navbar-nav li a {color:whitesmoke;}\r\n\r\n\r\n.navbar-nav li a:hover{color:black;}\r\n\r\n\r\n#navbrand{color:whitesmoke;}\r\n\r\n\r\n#navbrand:hover{color:black;}\r\n\r\n\r\n.thumbnail{border-radius:0;height:150px;}\r\n\r\n\r\n.total{background-color: crimson;}\r\n\r\n\r\n.sold{background-color: tomato;}\r\n\r\n\r\n.rev{background-color: greenyellow;}\r\n\r\n\r\n.btn{border-radius:0;}\r\n\r\n\r\n.order_detail{margin-bottom: 5px;}\r\n\r\n\r\n/* navbar css */\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSywyQkFBMkIsQ0FBQzs7O0FBR2pDLGlEQUFpRDs7O0FBQ2pEO0lBQ0ksVUFBVSxlQUFlLENBQUM7RUFDNUI7OztBQUVBLG9FQUFvRTs7O0FBQ3BFO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztFQUM5Qjs7O0FBRUEscURBQXFEOzs7QUFDckQ7SUFDRSxVQUFVLGdCQUFnQixDQUFDO0VBQzdCOzs7QUFFQSxtREFBbUQ7OztBQUNuRDtJQUNFLFVBQVUsa0JBQWtCLENBQUM7RUFDL0I7OztBQUVBLG9FQUFvRTs7O0FBQ3BFO0lBQ0UsVUFBVSxnQkFBZ0IsQ0FBQztJQUMzQjtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO1VBQ2I7O01BRUo7VUFDSSxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxjQUFjO1VBQ2QsZ0JBQWdCO01BQ3BCO01BQ0E7VUFDSSxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGdCQUFnQjtNQUNwQjs7TUFFQSxxQ0FBcUM7WUFDL0I7Z0JBQ0ksWUFBWTtnQkFDWixRQUFRO2dCQUNSLHNDQUFzQztZQUMxQztZQUNBLFFBQVEsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUM5QyxXQUFXLGdCQUFnQixDQUFDO1lBQzVCLFdBQVcsZ0JBQWdCLENBQUM7TUFDbEMsbUNBQW1DO0VBQ3ZDOzs7QUFFQSxlQUFlOzs7QUFFZjtNQUNJLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOzs7QUFDQSxrQkFBa0IsZ0JBQWdCLENBQUM7OztBQUNuQyx1QkFBdUIsV0FBVyxDQUFDOzs7QUFDbkMsVUFBVSxnQkFBZ0IsQ0FBQzs7O0FBQzNCLGdCQUFnQixXQUFXLENBQUM7OztBQUU1QixXQUFXLGVBQWUsQ0FBQyxZQUFZLENBQUM7OztBQUN4QyxPQUFPLHlCQUF5QixDQUFDOzs7QUFDakMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBQy9CLEtBQUssNkJBQTZCLENBQUM7OztBQUNuQyxLQUFLLGVBQWUsQ0FBQzs7O0FBRXJCLGNBQWMsa0JBQWtCLENBQUM7OztBQUdqQyxlQUFlIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e2JhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTt9XHJcblxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IHJlZDt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBncmVlbjt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBibHVlO31cclxuICB9IFxyXG4gIFxyXG4gIC8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogb3JhbmdlO31cclxuICB9IFxyXG4gIFxyXG4gIC8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogcGluazt9XHJcbiAgICAuZmljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9ICAgIFxyXG4gICAgICAucXVhbnRpdHl7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxNDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIHByb2R1Y3QgbGlzdCBzZWN0aW9uIHN0YXJ0cyBoZXJlICovXHJcbiAgICAgICAgICAgIC5wcm9kdWN0X2xpc3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCA1cHggbGlnaHRncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wdGl0bGV7cG9zaXRpb246IHJlbGF0aXZlO3RvcDoxMHB4O2xlZnQ6MTBweDt9XHJcbiAgICAgICAgICAgIC50YWJsZV9vbmV7bWFyZ2luLWxlZnQ6NDBweDt9XHJcbiAgICAgICAgICAgIC50YWJsZV90d297bWFyZ2luLWxlZnQ6MjBweDt9XHJcbiAgICAgIC8qIHByb2R1Y3QgbGlzdCBzZWN0aW9uIGVuZHMgaGVyZSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBjb21tZW4gY3NzICovXHJcbiAgICBcclxuICAubmF2YmFye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7ICBcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiBsaSBhIHtjb2xvcjp3aGl0ZXNtb2tlO31cclxuICAgIC5uYXZiYXItbmF2IGxpIGE6aG92ZXJ7Y29sb3I6YmxhY2s7fVxyXG4gICAgI25hdmJyYW5ke2NvbG9yOndoaXRlc21va2U7fVxyXG4gICAgI25hdmJyYW5kOmhvdmVye2NvbG9yOmJsYWNrO31cclxuXHJcbiAgICAudGh1bWJuYWlse2JvcmRlci1yYWRpdXM6MDtoZWlnaHQ6MTUwcHg7fVxyXG4gICAgLnRvdGFse2JhY2tncm91bmQtY29sb3I6IGNyaW1zb247fVxyXG4gICAgLnNvbGR7YmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO31cclxuICAgIC5yZXZ7YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7fVxyXG4gICAgLmJ0bntib3JkZXItcmFkaXVzOjA7fVxyXG5cclxuICAgIC5vcmRlcl9kZXRhaWx7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuXHJcblxyXG4gICAgLyogbmF2YmFyIGNzcyAqL1xyXG4gICAgIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'posui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dbrd_dbrd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dbrd/dbrd.component */ "./src/app/dbrd/dbrd.component.ts");
/* harmony import */ var _dbrdhome_dbrdhome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dbrdhome/dbrdhome.component */ "./src/app/dbrdhome/dbrdhome.component.ts");
/* harmony import */ var _salesledger_salesledger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./salesledger/salesledger.component */ "./src/app/salesledger/salesledger.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _sale_sale_component__WEBPACK_IMPORTED_MODULE_8__["SaleComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
            _dbrd_dbrd_component__WEBPACK_IMPORTED_MODULE_11__["DbrdComponent"],
            _dbrdhome_dbrdhome_component__WEBPACK_IMPORTED_MODULE_12__["DbrdhomeComponent"],
            _salesledger_salesledger_component__WEBPACK_IMPORTED_MODULE_13__["SalesledgerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                /* { path: 'products/:productId', component: ProductDetailsComponent }, */
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"] },
            ]),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.items = [];
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart(obj) {
        this.items = [];
        return this.items;
        /* this.product=this.product.filter(item => item !==obj) */
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".qnty{width:60px;}\r\n.btn{border-radius: 0;}\r\n.delbtn{border:0;background-color: transparent;color:darkred;}\r\n.delbtn:hover{border:0;background-color: transparent;color:green;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLENBQUM7QUFDakIsS0FBSyxnQkFBZ0IsQ0FBQztBQUN0QixRQUFRLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUM7QUFDN0QsY0FBYyxRQUFRLENBQUMsNkJBQTZCLENBQUMsV0FBVyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucW50eXt3aWR0aDo2MHB4O31cclxuLmJ0bntib3JkZXItcmFkaXVzOiAwO31cclxuLmRlbGJ0bntib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtjb2xvcjpkYXJrcmVkO31cclxuLmRlbGJ0bjpob3Zlcntib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtjb2xvcjpncmVlbjt9Il19 */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.qty = [1];
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
    }
    clearCart(id) {
        /* this.items = [];
      return this.items;   */
        for (let i = 0; i < this.items.length; ++i) {
            if (this.items[i].id === id) {
                this.items.splice(i, 1);
            }
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/dbrd/dbrd.component.css":
/*!*****************************************!*\
  !*** ./src/app/dbrd/dbrd.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{background-color: whitesmoke;}\r\n.sidenav {\r\n    height: 100%;\r\n    width: 100px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 65px;\r\n    left: 0;\r\n    background-color: whitesmoke;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  }\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    color: black;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n  }\r\n.sidenav a:hover {\r\n    color: black;\r\n    background-color: white;\r\n  }\r\n.main {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n  }\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n/* side bar fawasome icon */\r\n.active{background-color: white;padding:10px;}\r\n.fa-home{color:blueviolet}\r\n.notready{pointer-events: none;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGJyZC9kYnJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyw0QkFBNEIsQ0FBQztBQUNsQztJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGVBQWUsRUFBRSx1Q0FBdUM7SUFDeEQsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxVQUFVLGlCQUFpQixDQUFDO0lBQzVCLFlBQVksZUFBZSxDQUFDO0VBQzlCO0FBR0EsMkJBQTJCO0FBQzNCLFFBQVEsdUJBQXVCLENBQUMsWUFBWSxDQUFDO0FBQzdDLFNBQVMsZ0JBQWdCO0FBQ3pCLFVBQVUsb0JBQW9CLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kYnJkL2RicmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTt9XHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNjBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cclxuICAgIGZvbnQtc2l6ZTogMjhweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAvKiBzaWRlIGJhciBmYXdhc29tZSBpY29uICovXHJcbiAgLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwYWRkaW5nOjEwcHg7fVxyXG4gIC5mYS1ob21le2NvbG9yOmJsdWV2aW9sZXR9XHJcbiAgLm5vdHJlYWR5e3BvaW50ZXItZXZlbnRzOiBub25lO30iXX0= */");

/***/ }),

/***/ "./src/app/dbrd/dbrd.component.ts":
/*!****************************************!*\
  !*** ./src/app/dbrd/dbrd.component.ts ***!
  \****************************************/
/*! exports provided: DbrdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdComponent", function() { return DbrdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DbrdComponent = class DbrdComponent {
    constructor() { }
    ngOnInit() {
    }
};
DbrdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbrd',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbrd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbrd/dbrd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbrd.component.css */ "./src/app/dbrd/dbrd.component.css")).default]
    })
], DbrdComponent);



/***/ }),

/***/ "./src/app/dbrdhome/dbrdhome.component.css":
/*!*************************************************!*\
  !*** ./src/app/dbrdhome/dbrdhome.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dbhome{margin-top:100px;}\r\n.dbicon{position: relative;top:100px;left:20px;}\r\n.dbtext{margin-left:100px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGJyZGhvbWUvZGJyZGhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLFFBQVEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztBQUMvQyxRQUFRLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZGJyZGhvbWUvZGJyZGhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYmhvbWV7bWFyZ2luLXRvcDoxMDBweDt9XHJcbi5kYmljb257cG9zaXRpb246IHJlbGF0aXZlO3RvcDoxMDBweDtsZWZ0OjIwcHg7fVxyXG4uZGJ0ZXh0e21hcmdpbi1sZWZ0OjEwMHB4O30iXX0= */");

/***/ }),

/***/ "./src/app/dbrdhome/dbrdhome.component.ts":
/*!************************************************!*\
  !*** ./src/app/dbrdhome/dbrdhome.component.ts ***!
  \************************************************/
/*! exports provided: DbrdhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrdhomeComponent", function() { return DbrdhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DbrdhomeComponent = class DbrdhomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
DbrdhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbrdhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbrdhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbrdhome/dbrdhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbrdhome.component.css */ "./src/app/dbrdhome/dbrdhome.component.css")).default]
    })
], DbrdhomeComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{background-color:whitesmoke;}\r\n/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n    .example {background: red;}\r\n  }\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    .example {background: green;}\r\n  }\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n    .example {background: blue;}\r\n  }\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {\r\n    .example {background: orange;}\r\n  }\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {\r\n    .example {background: pink;}\r\n    .ficon{\r\n        margin-left:40px;\r\n        margin-top:40px;\r\n          }\r\n\r\n      .category{\r\n          margin-left:120px;\r\n          position: relative;\r\n          bottom:20px;\r\n          font-size:16px;\r\n          font-weight:bold;\r\n      }    \r\n      .quantity{\r\n          margin-left:140px;\r\n          margin-bottom:20px;\r\n          font-weight:bold;\r\n      }\r\n\r\n      /* product list section starts here */\r\n            .product_list{\r\n                height:300px;\r\n                border:0;\r\n                box-shadow: 5px 10px 8px 5px lightgray;\r\n            }\r\n            .ptitle{position: relative;top:10px;left:10px;}\r\n            .table_one{margin-left:40px;}\r\n            .table_two{margin-left:20px;}\r\n      /* product list section ends here */\r\n  }\r\n/* commen css */\r\nhtml body{overflow-y:hidden;}\r\n.navbar{\r\n      background-color: orangered;  \r\n      border-radius: 0;\r\n      border:none;\r\n    }\r\n.navbar-nav li a {color:whitesmoke;}\r\n.navbar-nav li a:hover{color:black;}\r\n#navbrand{color:whitesmoke;}\r\n#navbrand:hover{color:black;}\r\n.thumbnail{border-radius:0;height:150px;}\r\n.total{background-color: crimson;}\r\n.sold{background-color: tomato;}\r\n.rev{background-color: greenyellow;}\r\n.btn{border-radius:0;}\r\n.order_detail{margin-bottom: 5px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSywyQkFBMkIsQ0FBQztBQUNqQyxpREFBaUQ7QUFDakQ7SUFDSSxVQUFVLGVBQWUsQ0FBQztFQUM1QjtBQUVBLG9FQUFvRTtBQUNwRTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7RUFDOUI7QUFFQSxxREFBcUQ7QUFDckQ7SUFDRSxVQUFVLGdCQUFnQixDQUFDO0VBQzdCO0FBRUEsbURBQW1EO0FBQ25EO0lBQ0UsVUFBVSxrQkFBa0IsQ0FBQztFQUMvQjtBQUVBLG9FQUFvRTtBQUNwRTtJQUNFLFVBQVUsZ0JBQWdCLENBQUM7SUFDM0I7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtVQUNiOztNQUVKO1VBQ0ksaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsY0FBYztVQUNkLGdCQUFnQjtNQUNwQjtNQUNBO1VBQ0ksaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixnQkFBZ0I7TUFDcEI7O01BRUEscUNBQXFDO1lBQy9CO2dCQUNJLFlBQVk7Z0JBQ1osUUFBUTtnQkFDUixzQ0FBc0M7WUFDMUM7WUFDQSxRQUFRLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDOUMsV0FBVyxnQkFBZ0IsQ0FBQztZQUM1QixXQUFXLGdCQUFnQixDQUFDO01BQ2xDLG1DQUFtQztFQUN2QztBQUVBLGVBQWU7QUFDYixVQUFVLGlCQUFpQixDQUFDO0FBQzlCO01BQ0ksMkJBQTJCO01BQzNCLGdCQUFnQjtNQUNoQixXQUFXO0lBQ2I7QUFDQSxrQkFBa0IsZ0JBQWdCLENBQUM7QUFDbkMsdUJBQXVCLFdBQVcsQ0FBQztBQUNuQyxVQUFVLGdCQUFnQixDQUFDO0FBQzNCLGdCQUFnQixXQUFXLENBQUM7QUFFNUIsV0FBVyxlQUFlLENBQUMsWUFBWSxDQUFDO0FBQ3hDLE9BQU8seUJBQXlCLENBQUM7QUFDakMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQixLQUFLLDZCQUE2QixDQUFDO0FBQ25DLEtBQUssZUFBZSxDQUFDO0FBRXJCLGNBQWMsa0JBQWtCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO31cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IHJlZDt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBncmVlbjt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBibHVlO31cclxuICB9IFxyXG4gIFxyXG4gIC8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogb3JhbmdlO31cclxuICB9IFxyXG4gIFxyXG4gIC8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogcGluazt9XHJcbiAgICAuZmljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9ICAgIFxyXG4gICAgICAucXVhbnRpdHl7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDoxNDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIHByb2R1Y3QgbGlzdCBzZWN0aW9uIHN0YXJ0cyBoZXJlICovXHJcbiAgICAgICAgICAgIC5wcm9kdWN0X2xpc3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCA1cHggbGlnaHRncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wdGl0bGV7cG9zaXRpb246IHJlbGF0aXZlO3RvcDoxMHB4O2xlZnQ6MTBweDt9XHJcbiAgICAgICAgICAgIC50YWJsZV9vbmV7bWFyZ2luLWxlZnQ6NDBweDt9XHJcbiAgICAgICAgICAgIC50YWJsZV90d297bWFyZ2luLWxlZnQ6MjBweDt9XHJcbiAgICAgIC8qIHByb2R1Y3QgbGlzdCBzZWN0aW9uIGVuZHMgaGVyZSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBjb21tZW4gY3NzICovXHJcbiAgICBodG1sIGJvZHl7b3ZlcmZsb3cteTpoaWRkZW47fVxyXG4gIC5uYXZiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgIFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IGxpIGEge2NvbG9yOndoaXRlc21va2U7fVxyXG4gICAgLm5hdmJhci1uYXYgbGkgYTpob3Zlcntjb2xvcjpibGFjazt9XHJcbiAgICAjbmF2YnJhbmR7Y29sb3I6d2hpdGVzbW9rZTt9XHJcbiAgICAjbmF2YnJhbmQ6aG92ZXJ7Y29sb3I6YmxhY2s7fVxyXG5cclxuICAgIC50aHVtYm5haWx7Ym9yZGVyLXJhZGl1czowO2hlaWdodDoxNTBweDt9XHJcbiAgICAudG90YWx7YmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjt9XHJcbiAgICAuc29sZHtiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87fVxyXG4gICAgLnJldntiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdzt9XHJcbiAgICAuYnRue2JvcmRlci1yYWRpdXM6MDt9XHJcblxyXG4gICAgLm9yZGVyX2RldGFpbHttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.total_products = 500;
        this.sold_products = 380;
        this.revenue = 38000;
        this.grocery = [
            {
                image: 'assets/images/1.jpg',
                name: 'Moms Magic Biscuit',
                quantity: 50,
                available_qty: 25,
                price: 35,
                dor: '20/06/2020'
            },
            {
                image: 'assets/images/2.jpg',
                name: 'Dark Fantasy Biscuit',
                quantity: 150,
                available_qty: 55,
                price: 55,
                dor: '20/06/2020'
            },
            {
                image: 'assets/images/5.jpg',
                name: 'Safola Oil 15 Ltr',
                quantity: 350,
                available_qty: 125,
                price: 750,
                dor: '20/06/2020'
            },
            {
                image: 'assets/images/6.jpg',
                name: 'Safola Sunflower Oil',
                quantity: 500,
                available_qty: 250,
                price: 150,
                dor: '20/06/2020'
            },
            {
                image: 'assets/images/9.jpg',
                name: 'Bornvita',
                quantity: 500,
                available_qty: 257,
                price: 180,
                dor: '20/06/2020'
            }
        ];
        this.currentdate = new Date();
        this.daily_sale = [
            {
                image: 'assets/images/9.jpg',
                name: 'Bornvita',
                quantity: 25,
                price: 180
            },
            {
                image: 'assets/images/13.jpg',
                name: 'Knor Soup',
                quantity: 250,
                price: 56
            },
            {
                image: 'assets/images/14.jpg',
                name: 'Yipee Noodles',
                quantity: 450,
                price: 35
            },
            {
                image: 'assets/images/16.jpg',
                name: 'Maggiee',
                quantity: 1015,
                price: 45
            },
            {
                image: 'assets/images/19.jpg',
                name: 'Dettol Soap',
                quantity: 150,
                price: 55
            }
        ];
        this.monthly_product_sale = [
            {
                order_id: '#Fkart001',
                date: '20/06/2020',
                quantity: 50,
                tot_price: 250
            },
            {
                order_id: '#Fkart002',
                date: '19/06/2020',
                quantity: 5,
                tot_price: 50
            },
            {
                order_id: '#Fkart003',
                date: '18/06/2020',
                quantity: 150,
                tot_price: 9500
            },
            {
                order_id: '#Fkart004',
                date: '17/06/2020',
                quantity: 500,
                tot_price: 12550
            },
            {
                order_id: '#Fkart005',
                date: '16/06/2020',
                quantity: 45,
                tot_price: 8750
            }
        ];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "products", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n    .example {background: red;}\r\n  }\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    .example {background: green;}\r\n  }\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n    .example {background: blue;}\r\n  }\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {\r\n    .example {background: orange;}\r\n  }\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {\r\n    .example {background: pink;}\r\n  }\r\n/* commen css starts here */\r\nbody{background-color: whitesmoke;}\r\ntd{padding-bottom: 10px;}\r\n.form-control{border-radius: 0;}\r\n.btn{border-radius: 0;}\r\n#product{background-color: orange;}\r\n.prdtable{margin-left:70px;}\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pEO0lBQ0ksVUFBVSxlQUFlLENBQUM7RUFDNUI7QUFFQSxvRUFBb0U7QUFDcEU7SUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzlCO0FBRUEscURBQXFEO0FBQ3JEO0lBQ0UsVUFBVSxnQkFBZ0IsQ0FBQztFQUM3QjtBQUVBLG1EQUFtRDtBQUNuRDtJQUNFLFVBQVUsa0JBQWtCLENBQUM7RUFDL0I7QUFFQSxvRUFBb0U7QUFDcEU7SUFDRSxVQUFVLGdCQUFnQixDQUFDO0VBQzdCO0FBRUEsMkJBQTJCO0FBQzNCLEtBQUssNEJBQTRCLENBQUM7QUFDbEMsR0FBRyxvQkFBb0IsQ0FBQztBQUN4QixjQUFjLGdCQUFnQixDQUFDO0FBQy9CLEtBQUssZ0JBQWdCLENBQUM7QUFDdEIsU0FBUyx3QkFBd0IsQ0FBQztBQUNsQyxVQUFVLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogcmVkO31cclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IGdyZWVuO31cclxuICB9XHJcbiAgXHJcbiAgLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IGJsdWU7fVxyXG4gIH0gXHJcbiAgXHJcbiAgLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBvcmFuZ2U7fVxyXG4gIH0gXHJcbiAgXHJcbiAgLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBwaW5rO31cclxuICB9XHJcblxyXG4gIC8qIGNvbW1lbiBjc3Mgc3RhcnRzIGhlcmUgKi9cclxuICBib2R5e2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7fVxyXG4gIHRke3BhZGRpbmctYm90dG9tOiAxMHB4O31cclxuICAuZm9ybS1jb250cm9se2JvcmRlci1yYWRpdXM6IDA7fVxyXG4gIC5idG57Ym9yZGVyLXJhZGl1czogMDt9XHJcbiAgI3Byb2R1Y3R7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cclxuICAucHJkdGFibGV7bWFyZ2luLWxlZnQ6NzBweDt9XHJcbiAgICJdfQ== */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: MyProducts, ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProducts", function() { return MyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class MyProducts {
    constructor(Value, category, quantity, image, price, description) {
        this.Value = Value;
        this.category = category;
        this.quantity = quantity;
        this.image = image;
        this.price = price;
        this.description = description;
    }
}
let ProductComponent = class ProductComponent {
    constructor() {
        this.catg = ['Biscuit', 'Oil', 'Noodles', 'Rice', 'Chocolate'];
        this.myProducts = new Array();
        this.IsForUpdate = false;
        this.newProduct = {};
        this.myProducts.push(new MyProducts("Moms-Magic Biscuit", "Biscuit", "350", "assets/images/1.jpg", "35", "dry-fruit mix 150 gm"), new MyProducts("Cinthol Soap", "Soap", "150", "assets/images/20.jpg", "185", "8 pc worth 100 gm"), new MyProducts("Sunfeast Biscuit", "Biscuit", "450", "assets/images/3.jpg", "45", "Sugar Free"), new MyProducts("Fortune Pure Oil", "Oil", "250", "assets/images/5.jpg", "750", "15Ltr Drum"), new MyProducts("Maggiee", "Noodles", "1250", "assets/images/16.jpg", "28", "Instant ready product"));
    }
    ngOnInit() {
    }
    AddItem() {
        this.myProducts.push(this.newProduct);
        this.newProduct = {};
    }
    EditItem(i) {
        this.newProduct.Value = this.myProducts[i].Value;
        this.newProduct.category = this.myProducts[i].category;
        this.newProduct.quantity = this.myProducts[i].quantity;
        this.newProduct.image = this.myProducts[i].image;
        this.newProduct.price = this.myProducts[i].price;
        this.newProduct.description = this.myProducts[i].description;
        this.UpdatedItem = i;
        this.IsForUpdate = true;
    }
    UpdatedItem() {
        let data = this.UpdatedItem;
        for (let i = 0; i < this.myProducts.length; i++) {
            if (i == data) {
                this.myProducts[i].Value = this.newProduct.Value;
                this.myProducts[i].category = this.newProduct.category;
                this.myProducts[i].quantity = this.newProduct.quantity;
                this.myProducts[i].image = this.newProduct.image;
                this.myProducts[i].price = this.newProduct.price;
                this.myProducts[i].description = this.newProduct.description;
            }
        }
        this.IsForUpdate = false;
        this.newProduct = {};
    }
    DeleteItem(i) {
        this.myProducts.splice(i, 1);
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/sale/sale.component.css":
/*!*****************************************!*\
  !*** ./src/app/sale/sale.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n    .example {background: red;}\r\n  }\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    .example {background: green;}\r\n  }\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n    .example {background: blue;}\r\n  }\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {\r\n    .example {background: orange;}\r\n  }\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {\r\n    .example {background: pink;}\r\n  }\r\n/* commen css starts here */\r\nbody{background-color: whitesmoke;}\r\n.btn{border-radius: 0;margin:5px;}\r\n.thumbnail{border-radius: 0;float:left;margin-left:10px;width:250px;}\r\n#cart{background-color:orange;}\r\n.qnty{width:60px;}\r\n.cartlogo{margin-bottom: 10px;color:lightgreen;}\r\n.cartlogo:hover{margin-bottom: 10px;color:orangered;}\r\n.cartbtn{border:0;background-color: transparent;}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZS9zYWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pEO0lBQ0ksVUFBVSxlQUFlLENBQUM7RUFDNUI7QUFFQSxvRUFBb0U7QUFDcEU7SUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzlCO0FBRUEscURBQXFEO0FBQ3JEO0lBQ0UsVUFBVSxnQkFBZ0IsQ0FBQztFQUM3QjtBQUVBLG1EQUFtRDtBQUNuRDtJQUNFLFVBQVUsa0JBQWtCLENBQUM7RUFDL0I7QUFFQSxvRUFBb0U7QUFDcEU7SUFDRSxVQUFVLGdCQUFnQixDQUFDO0VBQzdCO0FBRUEsMkJBQTJCO0FBQzNCLEtBQUssNEJBQTRCLENBQUM7QUFDbEMsS0FBSyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7QUFDakMsV0FBVyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0FBQ3BFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUIsTUFBTSxVQUFVLENBQUM7QUFDakIsVUFBVSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMvQyxnQkFBZ0IsbUJBQW1CLENBQUMsZUFBZSxDQUFDO0FBQ3BELFNBQVMsUUFBUSxDQUFDLDZCQUE2QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2FsZS9zYWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZXhhbXBsZSB7YmFja2dyb3VuZDogcmVkO31cclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IGdyZWVuO31cclxuICB9XHJcbiAgXHJcbiAgLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmV4YW1wbGUge2JhY2tncm91bmQ6IGJsdWU7fVxyXG4gIH0gXHJcbiAgXHJcbiAgLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBvcmFuZ2U7fVxyXG4gIH0gXHJcbiAgXHJcbiAgLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5leGFtcGxlIHtiYWNrZ3JvdW5kOiBwaW5rO31cclxuICB9XHJcblxyXG4gIC8qIGNvbW1lbiBjc3Mgc3RhcnRzIGhlcmUgKi9cclxuICBib2R5e2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7fVxyXG4gIC5idG57Ym9yZGVyLXJhZGl1czogMDttYXJnaW46NXB4O31cclxuICAudGh1bWJuYWlse2JvcmRlci1yYWRpdXM6IDA7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDoxMHB4O3dpZHRoOjI1MHB4O31cclxuICAjY2FydHtiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTt9XHJcbiAgLnFudHl7d2lkdGg6NjBweDt9XHJcbiAgLmNhcnRsb2dve21hcmdpbi1ib3R0b206IDEwcHg7Y29sb3I6bGlnaHRncmVlbjt9XHJcbiAgLmNhcnRsb2dvOmhvdmVye21hcmdpbi1ib3R0b206IDEwcHg7Y29sb3I6b3JhbmdlcmVkO31cclxuICAuY2FydGJ0bntib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDt9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/sale/sale.component.ts":
/*!****************************************!*\
  !*** ./src/app/sale/sale.component.ts ***!
  \****************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");




let SaleComponent = class SaleComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.products = [
            {
                id: 1,
                image: 'assets/images/1.jpg',
                name: 'Moms-Magic Biscuit',
                description: 'dry-fruit mix 150 gm',
                price: 35
            },
            {
                id: 2,
                image: 'assets/images/20.jpg',
                name: 'Cinthol Soap',
                description: '8 pc worth 100 gm',
                price: 100
            },
            {
                id: 3,
                image: 'assets/images/3.jpg',
                name: 'Sunfeast Biscuit',
                description: 'sugar free',
                price: 25
            },
            { id: 4,
                image: 'assets/images/5.jpg',
                name: 'Fortune Pure Oil',
                description: '15 ltr drum',
                price: 1200
            },
            {
                id: 5,
                image: 'assets/images/16.jpg',
                name: 'Maggiee',
                description: '500 gm',
                price: 35
            },
            { id: 6,
                image: 'assets/images/9.jpg',
                name: 'Born Vita',
                description: '250 gm extra 10%',
                price: 100
            },
            { id: 7,
                image: 'assets/images/13.jpg',
                name: 'Knor soup',
                description: 'Sweet Corn mix',
                price: 45
            },
            { id: 8,
                image: 'assets/images/11.jpg',
                name: 'Pedia Sure',
                description: 'chocolate flavour',
                price: 120
            }
        ];
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        // window.alert('Your product has been added to the cart!');
    }
    ngOnInit() {
    }
};
SaleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
SaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale.component.css */ "./src/app/sale/sale.component.css")).default]
    })
], SaleComponent);



/***/ }),

/***/ "./src/app/salesledger/salesledger.component.css":
/*!*******************************************************!*\
  !*** ./src/app/salesledger/salesledger.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{background-color: whitesmoke;}\r\n.panel{background-color: whitesmoke;height:100px;}\r\n.mybtn{color:black;position: relative;top:130px;left:30px;border-top:0px;background-color: whitesmoke;}\r\n.mybtn:hover{color:black;position: relative;top:130px;left:30px;border-top:0px;background-color: whitesmoke;}\r\n.filter{margin-left:20px;}\r\n.dark{background-color: gray;color:white}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXNsZWRnZXIvc2FsZXNsZWRnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLDRCQUE0QixDQUFDO0FBQ2xDLE9BQU8sNEJBQTRCLENBQUMsWUFBWSxDQUFDO0FBQ2pELE9BQU8sV0FBVyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBQ3RHLGFBQWEsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBQzVHLFFBQVEsZ0JBQWdCLENBQUM7QUFDekIsTUFBTSxzQkFBc0IsQ0FBQyxXQUFXIiwiZmlsZSI6InNyYy9hcHAvc2FsZXNsZWRnZXIvc2FsZXNsZWRnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTt9XHJcbi5wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO2hlaWdodDoxMDBweDt9XHJcbi5teWJ0bntjb2xvcjpibGFjaztwb3NpdGlvbjogcmVsYXRpdmU7dG9wOjEzMHB4O2xlZnQ6MzBweDtib3JkZXItdG9wOjBweDtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO31cclxuLm15YnRuOmhvdmVye2NvbG9yOmJsYWNrO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6MTMwcHg7bGVmdDozMHB4O2JvcmRlci10b3A6MHB4O2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7fVxyXG4uZmlsdGVye21hcmdpbi1sZWZ0OjIwcHg7fVxyXG4uZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O2NvbG9yOndoaXRlfSJdfQ== */");

/***/ }),

/***/ "./src/app/salesledger/salesledger.component.ts":
/*!******************************************************!*\
  !*** ./src/app/salesledger/salesledger.component.ts ***!
  \******************************************************/
/*! exports provided: SalesledgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesledgerComponent", function() { return SalesledgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SalesledgerComponent = class SalesledgerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalesledgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salesledger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salesledger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/salesledger/salesledger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salesledger.component.css */ "./src/app/salesledger/salesledger.component.css")).default]
    })
], SalesledgerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Project\pos\posui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map