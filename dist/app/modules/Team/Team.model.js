"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const Users_model_1 = require("../Users/Users.model");
const teamSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    members: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
            validate: {
                validator: function (userId) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const userObjectId = new mongoose_1.Types.ObjectId(userId);
                            const user = yield Users_model_1.User.findById(userObjectId);
                            if (!user) {
                                return false;
                            }
                            return true;
                        }
                        catch (error) {
                            return false;
                        }
                    });
                },
                message: 'Invalid user ID in members array',
            },
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Team = (0, mongoose_1.model)('Team', teamSchema);
