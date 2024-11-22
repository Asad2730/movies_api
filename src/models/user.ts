import { model, Schema, type Document } from "mongoose";


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    password_confirmation?: string; 
}



const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
})

UserSchema.virtual('password_confirmation')
    .set(function(this: IUser, value: string) {
        this.set('password_confirmation', value);
    })
    .get(function(this: IUser) {
        return this.get('password_confirmation');
    });


UserSchema.pre('validate', function(this: IUser) {
    if (this.password !== this.password_confirmation) {
        throw new Error('Password and password confirmation do not match.');
    }
});

const User = model<IUser>('users', UserSchema)

export default User;