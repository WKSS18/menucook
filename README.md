react-cook

框架：
    使用了ant-design
    TabBar标签栏    
    https://mobile.ant.design/docs/react/introduce-cn
    引入：
    import 'antd-mobile/dist/antd-mobile.css'; 
    import { TabBar } from 'antd-mobile';

兼容问题处理：

1 移动端适配问题：
在index.html写了一个逻辑，动态去设置html的font-size,并且通过计算将其转为rem
以750为例  使用iphone6/7/8的屏幕，为何375按照750 2倍像素 主要为了显示清晰

2 1像素问题
依然利用设备像素比，只不过这次利用styled-components这个插件，封装了一个组件。可以根据需要传入需要设置的组件以及一些样式，适用不同的场景需求

别名处理：
由于文件层级嵌套较深，在引入某些文件的时候文件路径的书写很不方便，为了解决这个问题，在config-overrides.js中对路径别名进行设置：addWebpackAlias




