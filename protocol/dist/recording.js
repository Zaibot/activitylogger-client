/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.activitylogger = (function() {

    /**
     * Namespace activitylogger.
     * @exports activitylogger
     * @namespace
     */
    var activitylogger = {};

    activitylogger.TimelineCreate = (function() {

        /**
         * Properties of a TimelineCreate.
         * @memberof activitylogger
         * @interface ITimelineCreate
         * @property {string} timelineId TimelineCreate timelineId
         * @property {string} sourceId TimelineCreate sourceId
         * @property {string} publicKey TimelineCreate publicKey
         */

        /**
         * Constructs a new TimelineCreate.
         * @memberof activitylogger
         * @classdesc Represents a TimelineCreate.
         * @constructor
         * @param {activitylogger.ITimelineCreate=} [properties] Properties to set
         */
        function TimelineCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimelineCreate timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.TimelineCreate
         * @instance
         */
        TimelineCreate.prototype.timelineId = "";

        /**
         * TimelineCreate sourceId.
         * @member {string}sourceId
         * @memberof activitylogger.TimelineCreate
         * @instance
         */
        TimelineCreate.prototype.sourceId = "";

        /**
         * TimelineCreate publicKey.
         * @member {string}publicKey
         * @memberof activitylogger.TimelineCreate
         * @instance
         */
        TimelineCreate.prototype.publicKey = "";

        /**
         * Creates a new TimelineCreate instance using the specified properties.
         * @function create
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {activitylogger.ITimelineCreate=} [properties] Properties to set
         * @returns {activitylogger.TimelineCreate} TimelineCreate instance
         */
        TimelineCreate.create = function create(properties) {
            return new TimelineCreate(properties);
        };

        /**
         * Encodes the specified TimelineCreate message. Does not implicitly {@link activitylogger.TimelineCreate.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {activitylogger.ITimelineCreate} message TimelineCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimelineCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.publicKey);
            return writer;
        };

        /**
         * Encodes the specified TimelineCreate message, length delimited. Does not implicitly {@link activitylogger.TimelineCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {activitylogger.ITimelineCreate} message TimelineCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimelineCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimelineCreate message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.TimelineCreate} TimelineCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimelineCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.TimelineCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("publicKey"))
                throw $util.ProtocolError("missing required 'publicKey'", { instance: message });
            return message;
        };

        /**
         * Decodes a TimelineCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.TimelineCreate} TimelineCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimelineCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimelineCreate message.
         * @function verify
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimelineCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isString(message.sourceId))
                return "sourceId: string expected";
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
            return null;
        };

        /**
         * Creates a TimelineCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.TimelineCreate} TimelineCreate
         */
        TimelineCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.TimelineCreate)
                return object;
            var message = new $root.activitylogger.TimelineCreate();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            return message;
        };

        /**
         * Creates a plain object from a TimelineCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.TimelineCreate
         * @static
         * @param {activitylogger.TimelineCreate} message TimelineCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimelineCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timelineId = "";
                object.sourceId = "";
                object.publicKey = "";
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            return object;
        };

        /**
         * Converts this TimelineCreate to JSON.
         * @function toJSON
         * @memberof activitylogger.TimelineCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimelineCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimelineCreate;
    })();

    activitylogger.Access = (function() {

        /**
         * Properties of an Access.
         * @memberof activitylogger
         * @interface IAccess
         * @property {string} timelineId Access timelineId
         * @property {number|Long} sourceId Access sourceId
         * @property {string} publicKey Access publicKey
         * @property {activitylogger.Access.Type} state Access state
         */

        /**
         * Constructs a new Access.
         * @memberof activitylogger
         * @classdesc Represents an Access.
         * @constructor
         * @param {activitylogger.IAccess=} [properties] Properties to set
         */
        function Access(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Access timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.Access
         * @instance
         */
        Access.prototype.timelineId = "";

        /**
         * Access sourceId.
         * @member {number|Long}sourceId
         * @memberof activitylogger.Access
         * @instance
         */
        Access.prototype.sourceId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Access publicKey.
         * @member {string}publicKey
         * @memberof activitylogger.Access
         * @instance
         */
        Access.prototype.publicKey = "";

        /**
         * Access state.
         * @member {activitylogger.Access.Type}state
         * @memberof activitylogger.Access
         * @instance
         */
        Access.prototype.state = 1;

        /**
         * Creates a new Access instance using the specified properties.
         * @function create
         * @memberof activitylogger.Access
         * @static
         * @param {activitylogger.IAccess=} [properties] Properties to set
         * @returns {activitylogger.Access} Access instance
         */
        Access.create = function create(properties) {
            return new Access(properties);
        };

        /**
         * Encodes the specified Access message. Does not implicitly {@link activitylogger.Access.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.Access
         * @static
         * @param {activitylogger.IAccess} message Access message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Access.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sourceId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.publicKey);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified Access message, length delimited. Does not implicitly {@link activitylogger.Access.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.Access
         * @static
         * @param {activitylogger.IAccess} message Access message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Access.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Access message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.Access
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.Access} Access
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Access.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.Access();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.uint64();
                    break;
                case 3:
                    message.publicKey = reader.string();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("publicKey"))
                throw $util.ProtocolError("missing required 'publicKey'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            return message;
        };

        /**
         * Decodes an Access message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.Access
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.Access} Access
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Access.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Access message.
         * @function verify
         * @memberof activitylogger.Access
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Access.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isInteger(message.sourceId) && !(message.sourceId && $util.isInteger(message.sourceId.low) && $util.isInteger(message.sourceId.high)))
                return "sourceId: integer|Long expected";
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
            return null;
        };

        /**
         * Creates an Access message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.Access
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.Access} Access
         */
        Access.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.Access)
                return object;
            var message = new $root.activitylogger.Access();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                if ($util.Long)
                    (message.sourceId = $util.Long.fromValue(object.sourceId)).unsigned = true;
                else if (typeof object.sourceId === "string")
                    message.sourceId = parseInt(object.sourceId, 10);
                else if (typeof object.sourceId === "number")
                    message.sourceId = object.sourceId;
                else if (typeof object.sourceId === "object")
                    message.sourceId = new $util.LongBits(object.sourceId.low >>> 0, object.sourceId.high >>> 0).toNumber(true);
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            switch (object.state) {
            case "REVOKE":
            case 1:
                message.state = 1;
                break;
            case "READONLY":
            case 2:
                message.state = 2;
                break;
            case "WRITEONLY":
            case 3:
                message.state = 3;
                break;
            case "READWRITE":
            case 4:
                message.state = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Access message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.Access
         * @static
         * @param {activitylogger.Access} message Access
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Access.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timelineId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sourceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sourceId = options.longs === String ? "0" : 0;
                object.publicKey = "";
                object.state = options.enums === String ? "REVOKE" : 1;
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (typeof message.sourceId === "number")
                    object.sourceId = options.longs === String ? String(message.sourceId) : message.sourceId;
                else
                    object.sourceId = options.longs === String ? $util.Long.prototype.toString.call(message.sourceId) : options.longs === Number ? new $util.LongBits(message.sourceId.low >>> 0, message.sourceId.high >>> 0).toNumber(true) : message.sourceId;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.activitylogger.Access.Type[message.state] : message.state;
            return object;
        };

        /**
         * Converts this Access to JSON.
         * @function toJSON
         * @memberof activitylogger.Access
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Access.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @enum {string}
         * @property {number} REVOKE=1 REVOKE value
         * @property {number} READONLY=2 READONLY value
         * @property {number} WRITEONLY=3 WRITEONLY value
         * @property {number} READWRITE=4 READWRITE value
         */
        Access.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "REVOKE"] = 1;
            values[valuesById[2] = "READONLY"] = 2;
            values[valuesById[3] = "WRITEONLY"] = 3;
            values[valuesById[4] = "READWRITE"] = 4;
            return values;
        })();

        return Access;
    })();

    activitylogger.Interaction = (function() {

        /**
         * Properties of an Interaction.
         * @memberof activitylogger
         * @interface IInteraction
         * @property {string} timelineId Interaction timelineId
         * @property {string} sourceId Interaction sourceId
         * @property {number|Long} timeStart Interaction timeStart
         * @property {number|Long} timeEnd Interaction timeEnd
         * @property {string} [window] Interaction window
         * @property {number} keypresses Interaction keypresses
         * @property {number} mousepresses Interaction mousepresses
         */

        /**
         * Constructs a new Interaction.
         * @memberof activitylogger
         * @classdesc Represents an Interaction.
         * @constructor
         * @param {activitylogger.IInteraction=} [properties] Properties to set
         */
        function Interaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Interaction timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.timelineId = "";

        /**
         * Interaction sourceId.
         * @member {string}sourceId
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.sourceId = "";

        /**
         * Interaction timeStart.
         * @member {number|Long}timeStart
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.timeStart = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Interaction timeEnd.
         * @member {number|Long}timeEnd
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.timeEnd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Interaction window.
         * @member {string}window
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.window = "";

        /**
         * Interaction keypresses.
         * @member {number}keypresses
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.keypresses = 0;

        /**
         * Interaction mousepresses.
         * @member {number}mousepresses
         * @memberof activitylogger.Interaction
         * @instance
         */
        Interaction.prototype.mousepresses = 0;

        /**
         * Creates a new Interaction instance using the specified properties.
         * @function create
         * @memberof activitylogger.Interaction
         * @static
         * @param {activitylogger.IInteraction=} [properties] Properties to set
         * @returns {activitylogger.Interaction} Interaction instance
         */
        Interaction.create = function create(properties) {
            return new Interaction(properties);
        };

        /**
         * Encodes the specified Interaction message. Does not implicitly {@link activitylogger.Interaction.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.Interaction
         * @static
         * @param {activitylogger.IInteraction} message Interaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceId);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timeStart);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timeEnd);
            if (message.window != null && message.hasOwnProperty("window"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.window);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.keypresses);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.mousepresses);
            return writer;
        };

        /**
         * Encodes the specified Interaction message, length delimited. Does not implicitly {@link activitylogger.Interaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.Interaction
         * @static
         * @param {activitylogger.IInteraction} message Interaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Interaction message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.Interaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.Interaction} Interaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.Interaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.timeStart = reader.uint64();
                    break;
                case 4:
                    message.timeEnd = reader.uint64();
                    break;
                case 5:
                    message.window = reader.string();
                    break;
                case 6:
                    message.keypresses = reader.uint32();
                    break;
                case 7:
                    message.mousepresses = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("timeStart"))
                throw $util.ProtocolError("missing required 'timeStart'", { instance: message });
            if (!message.hasOwnProperty("timeEnd"))
                throw $util.ProtocolError("missing required 'timeEnd'", { instance: message });
            if (!message.hasOwnProperty("keypresses"))
                throw $util.ProtocolError("missing required 'keypresses'", { instance: message });
            if (!message.hasOwnProperty("mousepresses"))
                throw $util.ProtocolError("missing required 'mousepresses'", { instance: message });
            return message;
        };

        /**
         * Decodes an Interaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.Interaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.Interaction} Interaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Interaction message.
         * @function verify
         * @memberof activitylogger.Interaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Interaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isString(message.sourceId))
                return "sourceId: string expected";
            if (!$util.isInteger(message.timeStart) && !(message.timeStart && $util.isInteger(message.timeStart.low) && $util.isInteger(message.timeStart.high)))
                return "timeStart: integer|Long expected";
            if (!$util.isInteger(message.timeEnd) && !(message.timeEnd && $util.isInteger(message.timeEnd.low) && $util.isInteger(message.timeEnd.high)))
                return "timeEnd: integer|Long expected";
            if (message.window != null && message.hasOwnProperty("window"))
                if (!$util.isString(message.window))
                    return "window: string expected";
            if (!$util.isInteger(message.keypresses))
                return "keypresses: integer expected";
            if (!$util.isInteger(message.mousepresses))
                return "mousepresses: integer expected";
            return null;
        };

        /**
         * Creates an Interaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.Interaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.Interaction} Interaction
         */
        Interaction.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.Interaction)
                return object;
            var message = new $root.activitylogger.Interaction();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.timeStart != null)
                if ($util.Long)
                    (message.timeStart = $util.Long.fromValue(object.timeStart)).unsigned = true;
                else if (typeof object.timeStart === "string")
                    message.timeStart = parseInt(object.timeStart, 10);
                else if (typeof object.timeStart === "number")
                    message.timeStart = object.timeStart;
                else if (typeof object.timeStart === "object")
                    message.timeStart = new $util.LongBits(object.timeStart.low >>> 0, object.timeStart.high >>> 0).toNumber(true);
            if (object.timeEnd != null)
                if ($util.Long)
                    (message.timeEnd = $util.Long.fromValue(object.timeEnd)).unsigned = true;
                else if (typeof object.timeEnd === "string")
                    message.timeEnd = parseInt(object.timeEnd, 10);
                else if (typeof object.timeEnd === "number")
                    message.timeEnd = object.timeEnd;
                else if (typeof object.timeEnd === "object")
                    message.timeEnd = new $util.LongBits(object.timeEnd.low >>> 0, object.timeEnd.high >>> 0).toNumber(true);
            if (object.window != null)
                message.window = String(object.window);
            if (object.keypresses != null)
                message.keypresses = object.keypresses >>> 0;
            if (object.mousepresses != null)
                message.mousepresses = object.mousepresses >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Interaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.Interaction
         * @static
         * @param {activitylogger.Interaction} message Interaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Interaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timelineId = "";
                object.sourceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeStart = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeEnd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeEnd = options.longs === String ? "0" : 0;
                object.window = "";
                object.keypresses = 0;
                object.mousepresses = 0;
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.timeStart != null && message.hasOwnProperty("timeStart"))
                if (typeof message.timeStart === "number")
                    object.timeStart = options.longs === String ? String(message.timeStart) : message.timeStart;
                else
                    object.timeStart = options.longs === String ? $util.Long.prototype.toString.call(message.timeStart) : options.longs === Number ? new $util.LongBits(message.timeStart.low >>> 0, message.timeStart.high >>> 0).toNumber(true) : message.timeStart;
            if (message.timeEnd != null && message.hasOwnProperty("timeEnd"))
                if (typeof message.timeEnd === "number")
                    object.timeEnd = options.longs === String ? String(message.timeEnd) : message.timeEnd;
                else
                    object.timeEnd = options.longs === String ? $util.Long.prototype.toString.call(message.timeEnd) : options.longs === Number ? new $util.LongBits(message.timeEnd.low >>> 0, message.timeEnd.high >>> 0).toNumber(true) : message.timeEnd;
            if (message.window != null && message.hasOwnProperty("window"))
                object.window = message.window;
            if (message.keypresses != null && message.hasOwnProperty("keypresses"))
                object.keypresses = message.keypresses;
            if (message.mousepresses != null && message.hasOwnProperty("mousepresses"))
                object.mousepresses = message.mousepresses;
            return object;
        };

        /**
         * Converts this Interaction to JSON.
         * @function toJSON
         * @memberof activitylogger.Interaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Interaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Interaction;
    })();

    activitylogger.WindowActivity = (function() {

        /**
         * Properties of a WindowActivity.
         * @memberof activitylogger
         * @interface IWindowActivity
         * @property {string} timelineId WindowActivity timelineId
         * @property {string} sourceId WindowActivity sourceId
         * @property {number|Long} timeStart WindowActivity timeStart
         * @property {number|Long} timeEnd WindowActivity timeEnd
         * @property {Array.<string>} [titles] WindowActivity titles
         */

        /**
         * Constructs a new WindowActivity.
         * @memberof activitylogger
         * @classdesc Represents a WindowActivity.
         * @constructor
         * @param {activitylogger.IWindowActivity=} [properties] Properties to set
         */
        function WindowActivity(properties) {
            this.titles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WindowActivity timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.WindowActivity
         * @instance
         */
        WindowActivity.prototype.timelineId = "";

        /**
         * WindowActivity sourceId.
         * @member {string}sourceId
         * @memberof activitylogger.WindowActivity
         * @instance
         */
        WindowActivity.prototype.sourceId = "";

        /**
         * WindowActivity timeStart.
         * @member {number|Long}timeStart
         * @memberof activitylogger.WindowActivity
         * @instance
         */
        WindowActivity.prototype.timeStart = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WindowActivity timeEnd.
         * @member {number|Long}timeEnd
         * @memberof activitylogger.WindowActivity
         * @instance
         */
        WindowActivity.prototype.timeEnd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WindowActivity titles.
         * @member {Array.<string>}titles
         * @memberof activitylogger.WindowActivity
         * @instance
         */
        WindowActivity.prototype.titles = $util.emptyArray;

        /**
         * Creates a new WindowActivity instance using the specified properties.
         * @function create
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {activitylogger.IWindowActivity=} [properties] Properties to set
         * @returns {activitylogger.WindowActivity} WindowActivity instance
         */
        WindowActivity.create = function create(properties) {
            return new WindowActivity(properties);
        };

        /**
         * Encodes the specified WindowActivity message. Does not implicitly {@link activitylogger.WindowActivity.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {activitylogger.IWindowActivity} message WindowActivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WindowActivity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceId);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timeStart);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timeEnd);
            if (message.titles != null && message.titles.length)
                for (var i = 0; i < message.titles.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.titles[i]);
            return writer;
        };

        /**
         * Encodes the specified WindowActivity message, length delimited. Does not implicitly {@link activitylogger.WindowActivity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {activitylogger.IWindowActivity} message WindowActivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WindowActivity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WindowActivity message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.WindowActivity} WindowActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WindowActivity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.WindowActivity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.timeStart = reader.uint64();
                    break;
                case 4:
                    message.timeEnd = reader.uint64();
                    break;
                case 5:
                    if (!(message.titles && message.titles.length))
                        message.titles = [];
                    message.titles.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("timeStart"))
                throw $util.ProtocolError("missing required 'timeStart'", { instance: message });
            if (!message.hasOwnProperty("timeEnd"))
                throw $util.ProtocolError("missing required 'timeEnd'", { instance: message });
            return message;
        };

        /**
         * Decodes a WindowActivity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.WindowActivity} WindowActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WindowActivity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WindowActivity message.
         * @function verify
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WindowActivity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isString(message.sourceId))
                return "sourceId: string expected";
            if (!$util.isInteger(message.timeStart) && !(message.timeStart && $util.isInteger(message.timeStart.low) && $util.isInteger(message.timeStart.high)))
                return "timeStart: integer|Long expected";
            if (!$util.isInteger(message.timeEnd) && !(message.timeEnd && $util.isInteger(message.timeEnd.low) && $util.isInteger(message.timeEnd.high)))
                return "timeEnd: integer|Long expected";
            if (message.titles != null && message.hasOwnProperty("titles")) {
                if (!Array.isArray(message.titles))
                    return "titles: array expected";
                for (var i = 0; i < message.titles.length; ++i)
                    if (!$util.isString(message.titles[i]))
                        return "titles: string[] expected";
            }
            return null;
        };

        /**
         * Creates a WindowActivity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.WindowActivity} WindowActivity
         */
        WindowActivity.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.WindowActivity)
                return object;
            var message = new $root.activitylogger.WindowActivity();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.timeStart != null)
                if ($util.Long)
                    (message.timeStart = $util.Long.fromValue(object.timeStart)).unsigned = true;
                else if (typeof object.timeStart === "string")
                    message.timeStart = parseInt(object.timeStart, 10);
                else if (typeof object.timeStart === "number")
                    message.timeStart = object.timeStart;
                else if (typeof object.timeStart === "object")
                    message.timeStart = new $util.LongBits(object.timeStart.low >>> 0, object.timeStart.high >>> 0).toNumber(true);
            if (object.timeEnd != null)
                if ($util.Long)
                    (message.timeEnd = $util.Long.fromValue(object.timeEnd)).unsigned = true;
                else if (typeof object.timeEnd === "string")
                    message.timeEnd = parseInt(object.timeEnd, 10);
                else if (typeof object.timeEnd === "number")
                    message.timeEnd = object.timeEnd;
                else if (typeof object.timeEnd === "object")
                    message.timeEnd = new $util.LongBits(object.timeEnd.low >>> 0, object.timeEnd.high >>> 0).toNumber(true);
            if (object.titles) {
                if (!Array.isArray(object.titles))
                    throw TypeError(".activitylogger.WindowActivity.titles: array expected");
                message.titles = [];
                for (var i = 0; i < object.titles.length; ++i)
                    message.titles[i] = String(object.titles[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a WindowActivity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.WindowActivity
         * @static
         * @param {activitylogger.WindowActivity} message WindowActivity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WindowActivity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.titles = [];
            if (options.defaults) {
                object.timelineId = "";
                object.sourceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeStart = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeEnd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeEnd = options.longs === String ? "0" : 0;
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.timeStart != null && message.hasOwnProperty("timeStart"))
                if (typeof message.timeStart === "number")
                    object.timeStart = options.longs === String ? String(message.timeStart) : message.timeStart;
                else
                    object.timeStart = options.longs === String ? $util.Long.prototype.toString.call(message.timeStart) : options.longs === Number ? new $util.LongBits(message.timeStart.low >>> 0, message.timeStart.high >>> 0).toNumber(true) : message.timeStart;
            if (message.timeEnd != null && message.hasOwnProperty("timeEnd"))
                if (typeof message.timeEnd === "number")
                    object.timeEnd = options.longs === String ? String(message.timeEnd) : message.timeEnd;
                else
                    object.timeEnd = options.longs === String ? $util.Long.prototype.toString.call(message.timeEnd) : options.longs === Number ? new $util.LongBits(message.timeEnd.low >>> 0, message.timeEnd.high >>> 0).toNumber(true) : message.timeEnd;
            if (message.titles && message.titles.length) {
                object.titles = [];
                for (var j = 0; j < message.titles.length; ++j)
                    object.titles[j] = message.titles[j];
            }
            return object;
        };

        /**
         * Converts this WindowActivity to JSON.
         * @function toJSON
         * @memberof activitylogger.WindowActivity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WindowActivity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WindowActivity;
    })();

    activitylogger.FolderActivity = (function() {

        /**
         * Properties of a FolderActivity.
         * @memberof activitylogger
         * @interface IFolderActivity
         * @property {string} timelineId FolderActivity timelineId
         * @property {string} sourceId FolderActivity sourceId
         * @property {number|Long} timeStart FolderActivity timeStart
         * @property {number|Long} timeEnd FolderActivity timeEnd
         * @property {Array.<string>} [paths] FolderActivity paths
         */

        /**
         * Constructs a new FolderActivity.
         * @memberof activitylogger
         * @classdesc Represents a FolderActivity.
         * @constructor
         * @param {activitylogger.IFolderActivity=} [properties] Properties to set
         */
        function FolderActivity(properties) {
            this.paths = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FolderActivity timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.FolderActivity
         * @instance
         */
        FolderActivity.prototype.timelineId = "";

        /**
         * FolderActivity sourceId.
         * @member {string}sourceId
         * @memberof activitylogger.FolderActivity
         * @instance
         */
        FolderActivity.prototype.sourceId = "";

        /**
         * FolderActivity timeStart.
         * @member {number|Long}timeStart
         * @memberof activitylogger.FolderActivity
         * @instance
         */
        FolderActivity.prototype.timeStart = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FolderActivity timeEnd.
         * @member {number|Long}timeEnd
         * @memberof activitylogger.FolderActivity
         * @instance
         */
        FolderActivity.prototype.timeEnd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FolderActivity paths.
         * @member {Array.<string>}paths
         * @memberof activitylogger.FolderActivity
         * @instance
         */
        FolderActivity.prototype.paths = $util.emptyArray;

        /**
         * Creates a new FolderActivity instance using the specified properties.
         * @function create
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {activitylogger.IFolderActivity=} [properties] Properties to set
         * @returns {activitylogger.FolderActivity} FolderActivity instance
         */
        FolderActivity.create = function create(properties) {
            return new FolderActivity(properties);
        };

        /**
         * Encodes the specified FolderActivity message. Does not implicitly {@link activitylogger.FolderActivity.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {activitylogger.IFolderActivity} message FolderActivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FolderActivity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceId);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timeStart);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timeEnd);
            if (message.paths != null && message.paths.length)
                for (var i = 0; i < message.paths.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.paths[i]);
            return writer;
        };

        /**
         * Encodes the specified FolderActivity message, length delimited. Does not implicitly {@link activitylogger.FolderActivity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {activitylogger.IFolderActivity} message FolderActivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FolderActivity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FolderActivity message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.FolderActivity} FolderActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FolderActivity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.FolderActivity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.timeStart = reader.uint64();
                    break;
                case 4:
                    message.timeEnd = reader.uint64();
                    break;
                case 5:
                    if (!(message.paths && message.paths.length))
                        message.paths = [];
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("timeStart"))
                throw $util.ProtocolError("missing required 'timeStart'", { instance: message });
            if (!message.hasOwnProperty("timeEnd"))
                throw $util.ProtocolError("missing required 'timeEnd'", { instance: message });
            return message;
        };

        /**
         * Decodes a FolderActivity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.FolderActivity} FolderActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FolderActivity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FolderActivity message.
         * @function verify
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FolderActivity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isString(message.sourceId))
                return "sourceId: string expected";
            if (!$util.isInteger(message.timeStart) && !(message.timeStart && $util.isInteger(message.timeStart.low) && $util.isInteger(message.timeStart.high)))
                return "timeStart: integer|Long expected";
            if (!$util.isInteger(message.timeEnd) && !(message.timeEnd && $util.isInteger(message.timeEnd.low) && $util.isInteger(message.timeEnd.high)))
                return "timeEnd: integer|Long expected";
            if (message.paths != null && message.hasOwnProperty("paths")) {
                if (!Array.isArray(message.paths))
                    return "paths: array expected";
                for (var i = 0; i < message.paths.length; ++i)
                    if (!$util.isString(message.paths[i]))
                        return "paths: string[] expected";
            }
            return null;
        };

        /**
         * Creates a FolderActivity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.FolderActivity} FolderActivity
         */
        FolderActivity.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.FolderActivity)
                return object;
            var message = new $root.activitylogger.FolderActivity();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.timeStart != null)
                if ($util.Long)
                    (message.timeStart = $util.Long.fromValue(object.timeStart)).unsigned = true;
                else if (typeof object.timeStart === "string")
                    message.timeStart = parseInt(object.timeStart, 10);
                else if (typeof object.timeStart === "number")
                    message.timeStart = object.timeStart;
                else if (typeof object.timeStart === "object")
                    message.timeStart = new $util.LongBits(object.timeStart.low >>> 0, object.timeStart.high >>> 0).toNumber(true);
            if (object.timeEnd != null)
                if ($util.Long)
                    (message.timeEnd = $util.Long.fromValue(object.timeEnd)).unsigned = true;
                else if (typeof object.timeEnd === "string")
                    message.timeEnd = parseInt(object.timeEnd, 10);
                else if (typeof object.timeEnd === "number")
                    message.timeEnd = object.timeEnd;
                else if (typeof object.timeEnd === "object")
                    message.timeEnd = new $util.LongBits(object.timeEnd.low >>> 0, object.timeEnd.high >>> 0).toNumber(true);
            if (object.paths) {
                if (!Array.isArray(object.paths))
                    throw TypeError(".activitylogger.FolderActivity.paths: array expected");
                message.paths = [];
                for (var i = 0; i < object.paths.length; ++i)
                    message.paths[i] = String(object.paths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FolderActivity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.FolderActivity
         * @static
         * @param {activitylogger.FolderActivity} message FolderActivity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FolderActivity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.paths = [];
            if (options.defaults) {
                object.timelineId = "";
                object.sourceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeStart = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeEnd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeEnd = options.longs === String ? "0" : 0;
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.timeStart != null && message.hasOwnProperty("timeStart"))
                if (typeof message.timeStart === "number")
                    object.timeStart = options.longs === String ? String(message.timeStart) : message.timeStart;
                else
                    object.timeStart = options.longs === String ? $util.Long.prototype.toString.call(message.timeStart) : options.longs === Number ? new $util.LongBits(message.timeStart.low >>> 0, message.timeStart.high >>> 0).toNumber(true) : message.timeStart;
            if (message.timeEnd != null && message.hasOwnProperty("timeEnd"))
                if (typeof message.timeEnd === "number")
                    object.timeEnd = options.longs === String ? String(message.timeEnd) : message.timeEnd;
                else
                    object.timeEnd = options.longs === String ? $util.Long.prototype.toString.call(message.timeEnd) : options.longs === Number ? new $util.LongBits(message.timeEnd.low >>> 0, message.timeEnd.high >>> 0).toNumber(true) : message.timeEnd;
            if (message.paths && message.paths.length) {
                object.paths = [];
                for (var j = 0; j < message.paths.length; ++j)
                    object.paths[j] = message.paths[j];
            }
            return object;
        };

        /**
         * Converts this FolderActivity to JSON.
         * @function toJSON
         * @memberof activitylogger.FolderActivity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FolderActivity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FolderActivity;
    })();

    activitylogger.Meeting = (function() {

        /**
         * Properties of a Meeting.
         * @memberof activitylogger
         * @interface IMeeting
         * @property {string} timelineId Meeting timelineId
         * @property {string} sourceId Meeting sourceId
         * @property {number|Long} timeStart Meeting timeStart
         * @property {number|Long} timeEnd Meeting timeEnd
         * @property {string} description Meeting description
         */

        /**
         * Constructs a new Meeting.
         * @memberof activitylogger
         * @classdesc Represents a Meeting.
         * @constructor
         * @param {activitylogger.IMeeting=} [properties] Properties to set
         */
        function Meeting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Meeting timelineId.
         * @member {string}timelineId
         * @memberof activitylogger.Meeting
         * @instance
         */
        Meeting.prototype.timelineId = "";

        /**
         * Meeting sourceId.
         * @member {string}sourceId
         * @memberof activitylogger.Meeting
         * @instance
         */
        Meeting.prototype.sourceId = "";

        /**
         * Meeting timeStart.
         * @member {number|Long}timeStart
         * @memberof activitylogger.Meeting
         * @instance
         */
        Meeting.prototype.timeStart = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Meeting timeEnd.
         * @member {number|Long}timeEnd
         * @memberof activitylogger.Meeting
         * @instance
         */
        Meeting.prototype.timeEnd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Meeting description.
         * @member {string}description
         * @memberof activitylogger.Meeting
         * @instance
         */
        Meeting.prototype.description = "";

        /**
         * Creates a new Meeting instance using the specified properties.
         * @function create
         * @memberof activitylogger.Meeting
         * @static
         * @param {activitylogger.IMeeting=} [properties] Properties to set
         * @returns {activitylogger.Meeting} Meeting instance
         */
        Meeting.create = function create(properties) {
            return new Meeting(properties);
        };

        /**
         * Encodes the specified Meeting message. Does not implicitly {@link activitylogger.Meeting.verify|verify} messages.
         * @function encode
         * @memberof activitylogger.Meeting
         * @static
         * @param {activitylogger.IMeeting} message Meeting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meeting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.timelineId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceId);
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timeStart);
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timeEnd);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified Meeting message, length delimited. Does not implicitly {@link activitylogger.Meeting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof activitylogger.Meeting
         * @static
         * @param {activitylogger.IMeeting} message Meeting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meeting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Meeting message from the specified reader or buffer.
         * @function decode
         * @memberof activitylogger.Meeting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {activitylogger.Meeting} Meeting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meeting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.activitylogger.Meeting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timelineId = reader.string();
                    break;
                case 2:
                    message.sourceId = reader.string();
                    break;
                case 3:
                    message.timeStart = reader.uint64();
                    break;
                case 4:
                    message.timeEnd = reader.uint64();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timelineId"))
                throw $util.ProtocolError("missing required 'timelineId'", { instance: message });
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            if (!message.hasOwnProperty("timeStart"))
                throw $util.ProtocolError("missing required 'timeStart'", { instance: message });
            if (!message.hasOwnProperty("timeEnd"))
                throw $util.ProtocolError("missing required 'timeEnd'", { instance: message });
            if (!message.hasOwnProperty("description"))
                throw $util.ProtocolError("missing required 'description'", { instance: message });
            return message;
        };

        /**
         * Decodes a Meeting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof activitylogger.Meeting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {activitylogger.Meeting} Meeting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meeting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Meeting message.
         * @function verify
         * @memberof activitylogger.Meeting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Meeting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.timelineId))
                return "timelineId: string expected";
            if (!$util.isString(message.sourceId))
                return "sourceId: string expected";
            if (!$util.isInteger(message.timeStart) && !(message.timeStart && $util.isInteger(message.timeStart.low) && $util.isInteger(message.timeStart.high)))
                return "timeStart: integer|Long expected";
            if (!$util.isInteger(message.timeEnd) && !(message.timeEnd && $util.isInteger(message.timeEnd.low) && $util.isInteger(message.timeEnd.high)))
                return "timeEnd: integer|Long expected";
            if (!$util.isString(message.description))
                return "description: string expected";
            return null;
        };

        /**
         * Creates a Meeting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof activitylogger.Meeting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {activitylogger.Meeting} Meeting
         */
        Meeting.fromObject = function fromObject(object) {
            if (object instanceof $root.activitylogger.Meeting)
                return object;
            var message = new $root.activitylogger.Meeting();
            if (object.timelineId != null)
                message.timelineId = String(object.timelineId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.timeStart != null)
                if ($util.Long)
                    (message.timeStart = $util.Long.fromValue(object.timeStart)).unsigned = true;
                else if (typeof object.timeStart === "string")
                    message.timeStart = parseInt(object.timeStart, 10);
                else if (typeof object.timeStart === "number")
                    message.timeStart = object.timeStart;
                else if (typeof object.timeStart === "object")
                    message.timeStart = new $util.LongBits(object.timeStart.low >>> 0, object.timeStart.high >>> 0).toNumber(true);
            if (object.timeEnd != null)
                if ($util.Long)
                    (message.timeEnd = $util.Long.fromValue(object.timeEnd)).unsigned = true;
                else if (typeof object.timeEnd === "string")
                    message.timeEnd = parseInt(object.timeEnd, 10);
                else if (typeof object.timeEnd === "number")
                    message.timeEnd = object.timeEnd;
                else if (typeof object.timeEnd === "object")
                    message.timeEnd = new $util.LongBits(object.timeEnd.low >>> 0, object.timeEnd.high >>> 0).toNumber(true);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a Meeting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof activitylogger.Meeting
         * @static
         * @param {activitylogger.Meeting} message Meeting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Meeting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timelineId = "";
                object.sourceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeStart = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeStart = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeEnd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeEnd = options.longs === String ? "0" : 0;
                object.description = "";
            }
            if (message.timelineId != null && message.hasOwnProperty("timelineId"))
                object.timelineId = message.timelineId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.timeStart != null && message.hasOwnProperty("timeStart"))
                if (typeof message.timeStart === "number")
                    object.timeStart = options.longs === String ? String(message.timeStart) : message.timeStart;
                else
                    object.timeStart = options.longs === String ? $util.Long.prototype.toString.call(message.timeStart) : options.longs === Number ? new $util.LongBits(message.timeStart.low >>> 0, message.timeStart.high >>> 0).toNumber(true) : message.timeStart;
            if (message.timeEnd != null && message.hasOwnProperty("timeEnd"))
                if (typeof message.timeEnd === "number")
                    object.timeEnd = options.longs === String ? String(message.timeEnd) : message.timeEnd;
                else
                    object.timeEnd = options.longs === String ? $util.Long.prototype.toString.call(message.timeEnd) : options.longs === Number ? new $util.LongBits(message.timeEnd.low >>> 0, message.timeEnd.high >>> 0).toNumber(true) : message.timeEnd;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this Meeting to JSON.
         * @function toJSON
         * @memberof activitylogger.Meeting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Meeting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Meeting;
    })();

    return activitylogger;
})();

module.exports = $root;
