import * as $protobuf from "protobufjs";

/** Namespace activitylogger. */
export namespace activitylogger {

    /** Properties of a TimelineCreate. */
    interface ITimelineCreate {

        /** TimelineCreate timelineId */
        timelineId: string;

        /** TimelineCreate sourceId */
        sourceId: string;

        /** TimelineCreate publicKey */
        publicKey: string;
    }

    /** Represents a TimelineCreate. */
    class TimelineCreate {

        /**
         * Constructs a new TimelineCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.ITimelineCreate);

        /** TimelineCreate timelineId. */
        public timelineId: string;

        /** TimelineCreate sourceId. */
        public sourceId: string;

        /** TimelineCreate publicKey. */
        public publicKey: string;

        /**
         * Creates a new TimelineCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimelineCreate instance
         */
        public static create(properties?: activitylogger.ITimelineCreate): activitylogger.TimelineCreate;

        /**
         * Encodes the specified TimelineCreate message. Does not implicitly {@link activitylogger.TimelineCreate.verify|verify} messages.
         * @param message TimelineCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.ITimelineCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimelineCreate message, length delimited. Does not implicitly {@link activitylogger.TimelineCreate.verify|verify} messages.
         * @param message TimelineCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.ITimelineCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimelineCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimelineCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.TimelineCreate;

        /**
         * Decodes a TimelineCreate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimelineCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.TimelineCreate;

        /**
         * Verifies a TimelineCreate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimelineCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimelineCreate
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.TimelineCreate;

        /**
         * Creates a plain object from a TimelineCreate message. Also converts values to other types if specified.
         * @param message TimelineCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.TimelineCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimelineCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Access. */
    interface IAccess {

        /** Access timelineId */
        timelineId: string;

        /** Access sourceId */
        sourceId: (number|Long);

        /** Access publicKey */
        publicKey: string;

        /** Access state */
        state: activitylogger.Access.Type;
    }

    /** Represents an Access. */
    class Access {

        /**
         * Constructs a new Access.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.IAccess);

        /** Access timelineId. */
        public timelineId: string;

        /** Access sourceId. */
        public sourceId: (number|Long);

        /** Access publicKey. */
        public publicKey: string;

        /** Access state. */
        public state: activitylogger.Access.Type;

        /**
         * Creates a new Access instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Access instance
         */
        public static create(properties?: activitylogger.IAccess): activitylogger.Access;

        /**
         * Encodes the specified Access message. Does not implicitly {@link activitylogger.Access.verify|verify} messages.
         * @param message Access message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Access message, length delimited. Does not implicitly {@link activitylogger.Access.verify|verify} messages.
         * @param message Access message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Access message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Access
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.Access;

        /**
         * Decodes an Access message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Access
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.Access;

        /**
         * Verifies an Access message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Access message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Access
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.Access;

        /**
         * Creates a plain object from an Access message. Also converts values to other types if specified.
         * @param message Access
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.Access, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Access to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Access {

        /** Type enum. */
        enum Type {
            REVOKE = 1,
            READONLY = 2,
            WRITEONLY = 3,
            READWRITE = 4
        }
    }

    /** Properties of an Interaction. */
    interface IInteraction {

        /** Interaction timelineId */
        timelineId: string;

        /** Interaction sourceId */
        sourceId: string;

        /** Interaction timeStart */
        timeStart: (number|Long);

        /** Interaction timeEnd */
        timeEnd: (number|Long);

        /** Interaction window */
        window?: string;

        /** Interaction keypresses */
        keypresses: number;

        /** Interaction mousepresses */
        mousepresses: number;
    }

    /** Represents an Interaction. */
    class Interaction {

        /**
         * Constructs a new Interaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.IInteraction);

        /** Interaction timelineId. */
        public timelineId: string;

        /** Interaction sourceId. */
        public sourceId: string;

        /** Interaction timeStart. */
        public timeStart: (number|Long);

        /** Interaction timeEnd. */
        public timeEnd: (number|Long);

        /** Interaction window. */
        public window: string;

        /** Interaction keypresses. */
        public keypresses: number;

        /** Interaction mousepresses. */
        public mousepresses: number;

        /**
         * Creates a new Interaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Interaction instance
         */
        public static create(properties?: activitylogger.IInteraction): activitylogger.Interaction;

        /**
         * Encodes the specified Interaction message. Does not implicitly {@link activitylogger.Interaction.verify|verify} messages.
         * @param message Interaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.IInteraction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Interaction message, length delimited. Does not implicitly {@link activitylogger.Interaction.verify|verify} messages.
         * @param message Interaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.IInteraction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Interaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Interaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.Interaction;

        /**
         * Decodes an Interaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Interaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.Interaction;

        /**
         * Verifies an Interaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Interaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Interaction
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.Interaction;

        /**
         * Creates a plain object from an Interaction message. Also converts values to other types if specified.
         * @param message Interaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.Interaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Interaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WindowActivity. */
    interface IWindowActivity {

        /** WindowActivity timelineId */
        timelineId: string;

        /** WindowActivity sourceId */
        sourceId: string;

        /** WindowActivity timeStart */
        timeStart: (number|Long);

        /** WindowActivity timeEnd */
        timeEnd: (number|Long);

        /** WindowActivity titles */
        titles?: string[];
    }

    /** Represents a WindowActivity. */
    class WindowActivity {

        /**
         * Constructs a new WindowActivity.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.IWindowActivity);

        /** WindowActivity timelineId. */
        public timelineId: string;

        /** WindowActivity sourceId. */
        public sourceId: string;

        /** WindowActivity timeStart. */
        public timeStart: (number|Long);

        /** WindowActivity timeEnd. */
        public timeEnd: (number|Long);

        /** WindowActivity titles. */
        public titles: string[];

        /**
         * Creates a new WindowActivity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WindowActivity instance
         */
        public static create(properties?: activitylogger.IWindowActivity): activitylogger.WindowActivity;

        /**
         * Encodes the specified WindowActivity message. Does not implicitly {@link activitylogger.WindowActivity.verify|verify} messages.
         * @param message WindowActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.IWindowActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WindowActivity message, length delimited. Does not implicitly {@link activitylogger.WindowActivity.verify|verify} messages.
         * @param message WindowActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.IWindowActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WindowActivity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WindowActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.WindowActivity;

        /**
         * Decodes a WindowActivity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WindowActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.WindowActivity;

        /**
         * Verifies a WindowActivity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WindowActivity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WindowActivity
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.WindowActivity;

        /**
         * Creates a plain object from a WindowActivity message. Also converts values to other types if specified.
         * @param message WindowActivity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.WindowActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WindowActivity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FolderActivity. */
    interface IFolderActivity {

        /** FolderActivity timelineId */
        timelineId: string;

        /** FolderActivity sourceId */
        sourceId: string;

        /** FolderActivity timeStart */
        timeStart: (number|Long);

        /** FolderActivity timeEnd */
        timeEnd: (number|Long);

        /** FolderActivity paths */
        paths?: string[];
    }

    /** Represents a FolderActivity. */
    class FolderActivity {

        /**
         * Constructs a new FolderActivity.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.IFolderActivity);

        /** FolderActivity timelineId. */
        public timelineId: string;

        /** FolderActivity sourceId. */
        public sourceId: string;

        /** FolderActivity timeStart. */
        public timeStart: (number|Long);

        /** FolderActivity timeEnd. */
        public timeEnd: (number|Long);

        /** FolderActivity paths. */
        public paths: string[];

        /**
         * Creates a new FolderActivity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FolderActivity instance
         */
        public static create(properties?: activitylogger.IFolderActivity): activitylogger.FolderActivity;

        /**
         * Encodes the specified FolderActivity message. Does not implicitly {@link activitylogger.FolderActivity.verify|verify} messages.
         * @param message FolderActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.IFolderActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FolderActivity message, length delimited. Does not implicitly {@link activitylogger.FolderActivity.verify|verify} messages.
         * @param message FolderActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.IFolderActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FolderActivity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FolderActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.FolderActivity;

        /**
         * Decodes a FolderActivity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FolderActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.FolderActivity;

        /**
         * Verifies a FolderActivity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FolderActivity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FolderActivity
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.FolderActivity;

        /**
         * Creates a plain object from a FolderActivity message. Also converts values to other types if specified.
         * @param message FolderActivity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.FolderActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FolderActivity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Meeting. */
    interface IMeeting {

        /** Meeting timelineId */
        timelineId: string;

        /** Meeting sourceId */
        sourceId: string;

        /** Meeting timeStart */
        timeStart: (number|Long);

        /** Meeting timeEnd */
        timeEnd: (number|Long);

        /** Meeting description */
        description: string;
    }

    /** Represents a Meeting. */
    class Meeting {

        /**
         * Constructs a new Meeting.
         * @param [properties] Properties to set
         */
        constructor(properties?: activitylogger.IMeeting);

        /** Meeting timelineId. */
        public timelineId: string;

        /** Meeting sourceId. */
        public sourceId: string;

        /** Meeting timeStart. */
        public timeStart: (number|Long);

        /** Meeting timeEnd. */
        public timeEnd: (number|Long);

        /** Meeting description. */
        public description: string;

        /**
         * Creates a new Meeting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Meeting instance
         */
        public static create(properties?: activitylogger.IMeeting): activitylogger.Meeting;

        /**
         * Encodes the specified Meeting message. Does not implicitly {@link activitylogger.Meeting.verify|verify} messages.
         * @param message Meeting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: activitylogger.IMeeting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Meeting message, length delimited. Does not implicitly {@link activitylogger.Meeting.verify|verify} messages.
         * @param message Meeting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: activitylogger.IMeeting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Meeting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Meeting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activitylogger.Meeting;

        /**
         * Decodes a Meeting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Meeting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activitylogger.Meeting;

        /**
         * Verifies a Meeting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Meeting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Meeting
         */
        public static fromObject(object: { [k: string]: any }): activitylogger.Meeting;

        /**
         * Creates a plain object from a Meeting message. Also converts values to other types if specified.
         * @param message Meeting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: activitylogger.Meeting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Meeting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
