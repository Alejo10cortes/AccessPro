import { Application } from '@nativescript/core'
import { setStatusBarColors } from './utils/status-bar'

Application.run({ moduleName: 'app-root' })

Application.on(Application.launchEvent, () => {
    setStatusBarColors()
})