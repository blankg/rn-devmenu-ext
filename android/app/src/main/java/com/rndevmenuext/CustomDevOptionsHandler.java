package com.rndevmenuext;

import android.util.Log;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.devsupport.interfaces.DevOptionHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by guyblank on 10/13/17.
 */

public class CustomDevOptionsHandler implements DevOptionHandler {

    private ReactInstanceManager _instanceManager;

    public CustomDevOptionsHandler(ReactInstanceManager instanceManager) {
        super();
        this._instanceManager = instanceManager;
    }

    @Override
    public void onOptionSelected() {
        Log.d("CustomDevOptionsHandler", "My Test Clicked!");
        this._instanceManager
                .getCurrentReactContext()
              .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
              .emit("toggleTestView", null);
    }
}
