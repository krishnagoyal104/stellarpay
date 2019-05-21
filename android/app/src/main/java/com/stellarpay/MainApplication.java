package com.stellarpay;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rnfingerprint.FingerprintAuthPackage;
import org.reactnative.camera.RNCameraPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import io.invertase.firebase.RNFirebasePackage;
import com.oblador.keychain.KeychainPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import com.oblador.vectoricons.VectorIconsPackage;


import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.auth.RNFirebaseAuthPackage;

public class MainApplication extends NavigationApplication {
    
    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
            new VectorIconsPackage(),
            new RandomBytesPackage(),
            new KeychainPackage(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new LottiePackage(),
            new RNCameraPackage(),
            new FingerprintAuthPackage()
        );
    }
  
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

}
