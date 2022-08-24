import { prop, modelOptions, getModelForClass, defaultClasses } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: "users",
        collation: { locale: "en", strength: 1, numericOrdering: true },
    },
    options: { customName: "Users" },
})

export class UserClass extends defaultClasses.TimeStamps {
    @prop()
    public firstName?: string;
    @prop()
    public lastName?: string;
}

export default getModelForClass(UserClass);