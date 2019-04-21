(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/groceries-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/*! exports provided: GroceriesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function() { return GroceriesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroceriesServiceService = /** @class */ (function () {
    function GroceriesServiceService() {
        this.items = [];
        console.log('Hello Groceries');
    }
    GroceriesServiceService.prototype.getItems = function () {
        return this.items;
    };
    GroceriesServiceService.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    GroceriesServiceService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GroceriesServiceService.prototype.editItem = function (item, index) {
        this.items[index] = item;
    };
    GroceriesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroceriesServiceService);
    return GroceriesServiceService;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Groceries\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class=\"Groceries List View\">\n      <ion-img src=\"/assets/market.jpg\"></ion-img>\n      <ion-card-header>\n        <ion-card-title>Welcome to Groceries</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    <ion-list lines=\"bottom\">\n      <ion-list-header>\n        <ion-label>Items to get: </ion-label>\n      </ion-list-header>\n    <h3 text-center *ngIf=\"loadItem().length === 0\">\n      No items on list!\n    </h3>\n    <ion-item-sliding *ngFor=\"let item of loadItem(); let i = index\">\n      <ion-item>\n        <ion-label>{{item.name}}</ion-label>\n        <p>{{item.quantity}}</p>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"editItem(item, i)\" color=\"primary\">\n          <ion-icon name=\"create\"></ion-icon>\n          Edit\n        </ion-item-option>\n          <ion-item-option (click)=\"shareItem(item, i)\" color=\"light\">\n          <ion-icon name=\"Share\"></ion-icon>\n          Share\n        </ion-item-option>\n        <ion-item-option (click)=\"removeItem(item, i)\" color=\"secondary\">\n          <ion-icon name=\"trash\"></ion-icon>\n        Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addItem()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJlay9kZXJla0RvY3MvU2Nob29sL21hcnl2aWxsZS9TcHJpbmcyMDE5L3N3ZHY2NTVBZHZhbmNlZFRvcGljcy93ZWVrNi93ZWVrLTYtZ3JvY2VyaWVzLWFwcC1yZXN0ZnVsLXNlcnZpY2VzLUNvZGVOYW1vci9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






var Tab1Page = /** @class */ (function () {
    function Tab1Page(alertController, toastCtrl, dataService, socialSharing) {
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.socialSharing = socialSharing;
        this.title = "Grocery";
    }
    Tab1Page.prototype.loadItem = function () {
        return this.dataService.getItems();
    };
    Tab1Page.prototype.addItem = function () {
        console.log("Adding Item:");
        this.showItemPromt();
    };
    Tab1Page.prototype.showItemPromt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add item',
                            message: "Please enter Item Content",
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: 'Name'
                                },
                                {
                                    name: 'quantity',
                                    type: 'text',
                                    placeholder: 'quantity'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (item) {
                                        console.log('Confirm Ok', item);
                                        _this.dataService.addItem(item);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.removeItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Removing Item - ", item, index);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Removing Item - ' + index + " ...",
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.dataService.removeItem(index);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.editItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Edit Item - ", item, index);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Editing Item - ' + index + " ...",
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.showEditItemPromt(item, index);
                        '';
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.showEditItemPromt = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Edit item',
                            message: "Please edit Item ...",
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: 'Name',
                                    value: item.name
                                },
                                {
                                    name: 'quantity',
                                    type: 'text',
                                    placeholder: 'quantity',
                                    value: item.quantity
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (item) {
                                        console.log('Confirm Ok', item);
                                        _this.dataService.editItem(item, index);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.shareItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, message, subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Sharing Item - ", item, index);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Sharing Item - ' + index + " ...",
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
                        subject = "Shared via Grocery App";
                        this.socialSharing.share(message, subject).then(function () {
                            // Sharing via email is possible
                            console.log("Shared Successfully!");
                        }).catch(function (error) {
                            // Sharing via email is not possible
                            console.error("Error while sharing", error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map