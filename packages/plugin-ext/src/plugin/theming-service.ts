/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

 import { PLUGIN_RPC_CONTEXT as Ext, ThemingServiceExt, ThemingServiceMain } from '../common/plugin-api-rpc';
 import { RPCProtocol } from '../common/rpc-protocol';

 export class ThemingServiceExtImpl implements ThemingServiceExt {
     private proxy: ThemingServiceMain;

     constructor(rpc: RPCProtocol) {
        this.proxy = rpc.getProxy(Ext.THEMING_MAIN);
    }

    activeColorTheme(): string {
        const promise = this.proxy.$activeColorTheme();
        const rest = promise.then(res => {
            console.log(res);
            return res;
        });
        return rest.then(res => res);
    }
 }
