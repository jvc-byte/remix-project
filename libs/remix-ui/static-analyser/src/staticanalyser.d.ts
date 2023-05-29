import { CompilationResult, SourceWithTarget } from '@remixproject/plugin-api'

import { ViewPlugin } from '@remixproject/engine-web';
import { EventEmitter } from 'events';
import Registry from '../state/registry';
export declare class AnalysisTab extends ViewPlugin {
    event: EventManager;
    events: EventEmitter;
    registry: Registry;
    element: HTMLDivElement;
    _components: any;
    _deps: {
        offsetToLineColumnConverter: any;
    };
    dispatch: any;
    constructor();
    onActivation(): Promise<void>;
    setDispatch(dispatch: any): void;
    render(): JSX.Element;
    updateComponent(state: any): JSX.Element;
    renderComponent(): void;
}

type RemixUiStaticAnalyserState = {
  file: string,
  source: SourceWithTarget,
  languageVersion: string,
  data: CompilationResult
  input?: string
  version?: string
}

type SolHintReport = {
  column: number,
  line: number,
  type: 'warning' | 'error',
  formattedMessage: string,
  options?: ErrorRendererOptions
}

type SolHintTabChildProps = {
  analysisModule: AnalysisTab
  currentFile: string
}

type RemixUiStaticAnalyserReducerActionType = {
  type: 'compilationFinished' | '' | any,
  payload: RemixUiStaticAnalyserState
}

interface ErrorRendererProps {
  message: any;
  opt: ErrorRendererOptions,
  warningErrors: any
  editor: any,
  name: string,
}

type ErrorRendererOptions = {
  "type": "warning" | "error",
  "useSpan": true,
  "errFile": string
  "fileName": string,
  "isLibrary": boolean,
  "errLine": number,
  "errCol": number,
  "item": {
      "warning": string,
      "location": string
  },
  "name": string,
  "locationString": string,
  "location": {
      "start": {
          "line": number,
          "column": number
      },
      "end": {
          "line": number,
          "column": number
      }
  }
}

