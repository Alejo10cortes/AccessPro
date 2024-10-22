import { Observable } from '@nativescript/core';

export class DeviceManagementViewModel extends Observable {
    username: string = 'Alejo Cortes';
    devices: Array<{ name: string, icon: string, isOn: boolean }> = [
        { name: 'Todas', icon: '🏠', isOn: false },
        { name: 'Cuarto', icon: '🛏️', isOn: true },
        { name: 'Sala', icon: '🛋️', isOn: false },
        { name: 'Entrada', icon: '🚪', isOn: true },
    ];

    constructor() {
        super();
    }

    onBackTap() {
        const frame = require('@nativescript/core').Frame;
        frame.topmost().goBack();
    }

    onAddDeviceTap() {
        console.log('Add device tapped');
        // TODO: Implement add device functionality
    }
}