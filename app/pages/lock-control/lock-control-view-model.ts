import { Observable } from '@nativescript/core';

export class LockControlViewModel extends Observable {
    isLocked: boolean = true;

    constructor() {
        super();
    }

    onToggleLock() {
        this.isLocked = !this.isLocked;
        this.notifyPropertyChange('isLocked', this.isLocked);
        console.log(this.isLocked ? 'Locked' : 'Unlocked');
    }

    onBackTap() {
        const frame = require('@nativescript/core').Frame;
        frame.topmost().goBack();
    }
}