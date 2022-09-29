"use strict";
exports.__esModule = true;
exports.GET_ALL_USERS = void 0;
var Users_1 = require("./../../Entities/Users");
var User_1 = require("./../TypeDefs/User");
var graphql_1 = require("graphql");
exports.GET_ALL_USERS = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    resolve: function () {
        return Users_1.Users.find();
    }
};
