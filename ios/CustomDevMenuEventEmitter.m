//
//  CustomDevMenuEventEmitter.m
//  rnDevMenuExt
//
//  Created by guy blank on 10/14/17.
//

#import <Foundation/Foundation.h>
#import "CustomDevMenuEventEmitter.h"

@implementation CustomDevMenuEventEmitter

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  // UIApplication.applicationState seems reasonably safe to access from
  // a background thread.
  return NO;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"toggleTestView"];
}

- (void)receiveTestNotification
{
  [self sendEventWithName:@"toggleTestView" body:nil];
}

- (void)startObserving
{
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(receiveTestNotification)
                                               name:@"toggleTestView"
                                             object:nil];
}
- (void)stopObserving
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}
@end
