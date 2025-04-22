import { Tabs, TabsList, TabsContent, TabsTrigger } from "zudoku/ui/Tabs";
import CustomCodeBlock from './CustomCodeBlock';

export function MultilangCodeTab({ content}) {
    return <Tabs defaultValue={content[0].language}>
        <TabsList>
            {content.map(c => <TabsTrigger value={c.language}>{c.language}</TabsTrigger>)}
        </TabsList>
        {
            content.map(c => {
                return <TabsContent value={c.language}>
                    <CustomCodeBlock language={c.language} code={c.code} filename={c.filename}/>
                </TabsContent>
            })
        }
    </Tabs>
}