import { Application, Device } from '@nativescript/core';

export function setStatusBarColors() {
    if (Application.android) {
        Application.android.on('activityStarted', () => {
            if (Device.sdkVersion >= '21') {
                const View = android.view.View;
                const window = Application.android.startActivity.getWindow();
                const decorView = window.getDecorView();
                decorView.setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
                );
                window.setStatusBarColor(android.graphics.Color.parseColor('#ffffff'));
            }
        });
    }

    if (Application.ios) {
        const statusBar = UIApplication.sharedApplication.valueForKey('statusBar');
        if (statusBar) {
            statusBar.styleProperty = UIStatusBarStyle.LightContent;
        }
    }
}