import "./style.module.scss";

import LabeledCheckboxList, {
  LabeledCheckboxListProps,
} from "../LabeledCheckboxList";
import React, { FC, useMemo } from "react";

export type SearchFormInnerProps = {
  minusItems: LabeledCheckboxListProps["items"];
  plusItems: LabeledCheckboxListProps["items"];
  searchInput: JSX.IntrinsicElements["div"]["children"];
  submitButton: JSX.IntrinsicElements["div"]["children"];
  windowWidth: NonNullable<JSX.IntrinsicElements["div"]["style"]>["width"];
};

const SearchFormInner: FC<SearchFormInnerProps> = ({
  minusItems,
  plusItems,
  searchInput,
  submitButton,
  windowWidth,
}) => {
  const style = useMemo<JSX.IntrinsicElements["div"]["style"]>(
    () => ({
      width: windowWidth,
    }),
    [windowWidth]
  );

  return (
    <div style={style} styleName="search-form-inner">
      <div styleName="search-input-wrapper">{searchInput}</div>
      <div>{submitButton}</div>
      <fieldset styleName="labeled-checkbox-list-wrapper">
        <legend styleName="legend">プラス検索</legend>
        <LabeledCheckboxList items={plusItems} />
      </fieldset>
      <fieldset styleName="labeled-checkbox-list-wrapper">
        <legend styleName="legend">マイナス検索</legend>
        <LabeledCheckboxList items={minusItems} />
      </fieldset>
    </div>
  );
};

export default SearchFormInner;
