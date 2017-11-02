//
//  CustomDevMenuModule.h
//  rnDevMenuExt
//
//  Created by guy blank on 10/5/17.
//
#import <React/RCTBridgeModule.h>
#if __has_include(<React/RCTDevMenu.h>)
#import <React/RCTDevMenu.h>
#endif

@interface CustomDevMenuModule : NSObject <RCTBridgeModule>

#if __has_include("RCTDevMenu.h")
@property (nonatomic, strong, readonly) RCTDevMenuItem *devMenuItem;
#endif

@end
