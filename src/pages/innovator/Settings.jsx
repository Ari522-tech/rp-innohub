import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { User, Lock, Bell, Save } from 'lucide-react';

const Settings = () => {
  // 1. Define State for the Toggles
  const [emailNotif, setEmailNotif] = useState(true);
  const [appUpdates, setAppUpdates] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        
        <TabsList className="bg-white border border-slate-200 p-1 mb-6 rounded-lg grid w-full grid-cols-3">
          <TabsTrigger 
            value="profile" 
            className="text-slate-600 font-medium data-[state=active]:bg-rp-blue data-[state=active]:text-white transition-all"
          >
            <User className="w-4 h-4 mr-2" /> Profile
          </TabsTrigger>
          
          <TabsTrigger 
            value="security" 
            className="text-slate-600 font-medium data-[state=active]:bg-rp-blue data-[state=active]:text-white transition-all"
          >
            <Lock className="w-4 h-4 mr-2" /> Security
          </TabsTrigger>
          
          <TabsTrigger 
            value="notifications" 
            className="text-slate-600 font-medium data-[state=active]:bg-rp-blue data-[state=active]:text-white transition-all"
          >
            <Bell className="w-4 h-4 mr-2" /> Notifications
          </TabsTrigger>
        </TabsList>

        {/* --- PROFILE SETTINGS --- */}
        <TabsContent value="profile">
          <Card className="bg-white shadow-lg border-t-4 border-t-rp-blue">
            <CardHeader>
              <CardTitle className="text-slate-900">Personal Information</CardTitle>
              <CardDescription className="text-slate-500">Update your public profile details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 mb-6">
                 <div className="h-24 w-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                    <User size={32} />
                 </div>
                 <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900">Change Avatar</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">First Name</Label>
                  {/* Added text-slate-900 */}
                  <Input defaultValue="Jean" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Last Name</Label>
                  {/* Added text-slate-900 */}
                  <Input defaultValue="Paul" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Email Address</Label>
                <Input defaultValue="student@rp.ac.rw" disabled className="bg-slate-50 text-slate-500 border-slate-200 cursor-not-allowed" />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Bio / Headline</Label>
                {/* Added text-slate-900 */}
                <Input defaultValue="IoT Enthusiast | Final Year Student at IPRC Kigali" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
              </div>

              <div className="pt-4 flex justify-end">
                <Button className="bg-rp-blue hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- SECURITY SETTINGS --- */}
        <TabsContent value="security">
          <Card className="bg-white shadow-lg border-t-4 border-t-rp-gold">
            <CardHeader>
              <CardTitle className="text-slate-900">Password & Security</CardTitle>
              <CardDescription className="text-slate-500">Manage your password and account access.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Current Password</Label>
                {/* Added text-slate-900 */}
                <Input type="password" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">New Password</Label>
                  {/* Added text-slate-900 */}
                  <Input type="password" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Confirm New Password</Label>
                  {/* Added text-slate-900 */}
                  <Input type="password" className="bg-white text-slate-900 border-slate-300 focus-visible:ring-rp-blue" />
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <Button className="bg-rp-blue hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20">
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* --- NOTIFICATIONS --- */}
        <TabsContent value="notifications">
          <Card className="bg-white shadow-lg border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="text-slate-900">Notification Preferences</CardTitle>
              <CardDescription className="text-slate-500">Choose what updates you want to receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               
               {/* Item 1: Email Notifications */}
               <div 
                 className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-rp-blue transition-colors bg-white cursor-pointer select-none"
                 onClick={() => setEmailNotif(!emailNotif)}
               >
                  <div className="space-y-1">
                    <Label className="text-base text-slate-900 font-semibold cursor-pointer">Email Notifications</Label>
                    <p className="text-sm text-slate-600">Receive emails about new calls for projects.</p>
                  </div>
                  {/* Interactive Switch Logic */}
                  <div className={`h-6 w-11 rounded-full relative transition-colors duration-200 ease-in-out ${emailNotif ? 'bg-rp-blue' : 'bg-slate-200'}`}>
                     <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${emailNotif ? 'translate-x-6 left-0' : 'translate-x-1 left-0'}`}></div>
                  </div>
               </div>
               
               {/* Item 2: Application Updates */}
               <div 
                 className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-rp-blue transition-colors bg-white cursor-pointer select-none"
                 onClick={() => setAppUpdates(!appUpdates)}
               >
                  <div className="space-y-1">
                    <Label className="text-base text-slate-900 font-semibold cursor-pointer">Application Updates</Label>
                    <p className="text-sm text-slate-600">Get notified when your project status changes.</p>
                  </div>
                   {/* Interactive Switch Logic */}
                   <div className={`h-6 w-11 rounded-full relative transition-colors duration-200 ease-in-out ${appUpdates ? 'bg-rp-blue' : 'bg-slate-200'}`}>
                     <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${appUpdates ? 'translate-x-6 left-0' : 'translate-x-1 left-0'}`}></div>
                  </div>
               </div>

            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default Settings;