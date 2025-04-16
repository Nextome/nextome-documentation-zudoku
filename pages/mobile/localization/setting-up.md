# SETTING UP YOUR PROJECT

Tra qui

<CodeBlockMultiLang 
language="kotlin"
code={
`val x = 2
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> print("x is neither 1 nor 2")
}
// x == 2`}/>

<CodeBlockMultiLang 
language="swift"
code={
`let count = 1...10
for number in count {
    print("Number is \(number)")
}`}/>

<CodeBlockMultiLang 
language="gradle"
code={
`let count = 1...10
for number in count {
    print("Number is \(number)")
}`}/>

<CodeBlockMultiLang 
language="groovy"
code={
`let count = 1...10
for number in count {
    print("Number is \(number)")
}`}/>

<!-- <CenteredImage src={"/assets/Technologies and tools/1.png"} caption={"Figure 1: Smartphone tracking architecture"} /> -->

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
  </TabsList>
  <TabsContent value="Android">
<CodeBlockMultiLang 
language="kotlin"
code={
`val x = 2
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> print("x is neither 1 nor 2")
}
// x == 2`}/>
  </TabsContent>
  <TabsContent value="iOS">
<CodeBlockMultiLang 
language="swift"
code={
`let count = 1...10
for number in count {
    print("Number is \(number)")
}`}/>
</TabsContent>
</Tabs>


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