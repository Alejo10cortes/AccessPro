import { EventData, Page } from '@nativescript/core';
import { LockControlViewModel } from './lock-control-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new LockControlViewModel();
}