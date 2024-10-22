import { EventData, Page } from '@nativescript/core';
import { DeviceManagementViewModel } from './device-management-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new DeviceManagementViewModel();
}