export default ({commonStyle, submenuStyle}) => (`
    <div class="tui-image-editor-main-container" style="${commonStyle}">
            <div class="tui-image-editor-top-bar">
         <div class="tui-image-editor-controls-buttons">
            <div>
                <svg class="tui-image-editor-save-btn">
                    <use xlink:href="../dist/svg/save.svg#ic-save"/>
                </svg>
            </div>
            <div>
                <svg class="tui-image-editor-save-btn">
                    <use xlink:href="../dist/svg/download.svg#ic-download"/>
                </svg>
            </div>
        </div>
        <div class="tui-image-editor-controls-history-buttons">
                <div class="tui-image-editor-controls-history-buttons-container">
            <div class="tie-btn-undo tui-image-editor-item tui-image-editor-save-btn">
                <svg class="svg_ic-menu">
                    <use xlink:href="../dist/svg/undo.svg#ic-undo"/>
                </svg>
            </div>
            <div class="tie-btn-redo tui-image-editor-item tui-image-editor-save-btn">
                <svg class="svg_ic-menu">
                    <use xlink:href="../dist/svg/redo.svg#ic-redo"/>
                </svg>
            </div>
            <div class="tie-btn-reset tui-image-editor-item tui-image-editor-save-btn">
                <svg class="svg_ic-menu">
                    <use xlink:href="../dist/svg/reset.svg#ic-reset"/>
                </svg>
            </div> 
            </div>
        </div>
        </div>
        <div class="tui-image-editor-main">
            <div class="tui-image-editor-submenu">
                <div class="tui-image-editor-submenu-style" style="${submenuStyle}"></div>
            </div>
            <div class="tui-image-editor-wrap">
                <div class="tui-image-editor-size-wrap">
                    <div class="tui-image-editor-align-wrap">
                        <div class="tui-image-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);
