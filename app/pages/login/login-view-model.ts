import { Observable } from '@nativescript/core';

export class LoginViewModel extends Observable {
    email: string = '';
    password: string = '';

    constructor() {
        super();
    }

    onLoginTap() {
        // TODO: Implement actual login logic
        console.log('Login tapped');
        // Navigate to the lock control page
        const frame = require('@nativescript/core').Frame;
        frame.topmost().navigate('pages/lock-control/lock-control-page');
    }

    onCreateAccountTap() {
        console.log('Create account tapped');
        // TODO: Implement account creation logic or navigation
    }
}