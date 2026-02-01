import type {languages} from '../fillers/monaco-editor-core';
import * as privateYQLs from '../s-expressions/s-expressions';
import * as privateYQL from '../yql/yql';

interface MonacoYQLanguage {
    configuration: languages.LanguageConfiguration;
    monarch: languages.IMonarchLanguage;
}

/**
 * @deprecated Use `monaco-editor-webpack-plugin` instead.
 */
export const YQLs: MonacoYQLanguage = {
    configuration: privateYQLs.conf,
    monarch: privateYQLs.language,
};

/**
 * @deprecated Use `monaco-editor-webpack-plugin` instead.
 */
export const YQL: MonacoYQLanguage = {
    configuration: privateYQL.conf,
    monarch: privateYQL.getLanguage({ansi: false}),
};

/**
 * @deprecated Use `monaco-editor-webpack-plugin` instead.
 */
export const YQL_ANSI: MonacoYQLanguage = {
    configuration: privateYQL.conf,
    monarch: privateYQL.getLanguage({ansi: true}),
};
