# SETTING UP YOUR PROJECT

Tra qui

<div>
  <SyntaxHighlight 
    language="typescript"
    code="this is the code"
    wrapLines = "false"
    title = "Questo è il titolo"
    showCopy = "never"
    showCopyText= "false"
    children="this is a children"
    showLanguageIndicator="true"
    noBackground="true">
    {`for (let i = 0; i < Infinity; i++) {
      console.log(i);
    }`}
  </SyntaxHighlight>
</div>

e qui

<Tabs groupId="linguaggio">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
    <TabsTrigger value="React">React</TabsTrigger>
    <TabsTrigger value="Flutter">Flutter</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    @include: ./android-setting-up.md
  </TabsContent>
  <TabsContent value="iOS">
    This is for iOS
  </TabsContent>
    <TabsContent value="React">
    This is for Ionic
  </TabsContent>
    <TabsContent value="Flutter">
    This is for Ionic
  </TabsContent>
</Tabs>