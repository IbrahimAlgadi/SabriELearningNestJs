import {Controller, Get, Res} from '@nestjs/common';
import {Response} from "express";

@Controller('playground')
export class GraphqlPlaygroundController {

    @Get('graphql')
    renderGraphiQL(@Res() res: Response) {
        res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>GraphiQL</title>
          <link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
        </head>
        <body style="margin: 0;">
          <div id="graphiql" style="height: 100vh;"></div>
          <script
            crossorigin
            src="https://unpkg.com/react/umd/react.production.min.js"
          ></script>
          <script
            crossorigin
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          ></script>
          <script
            crossorigin
            src="https://unpkg.com/graphiql/graphiql.min.js"
          ></script>
          <script>
            const graphQLFetcher = graphQLParams =>
              fetch('/graphql', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(graphQLParams),
              }).then(response => response.json());

              ReactDOM.render(
                  React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
                  document.getElementById('graphiql'),
              );
          </script>
        </body>
      </html>
    `);

    }

}
